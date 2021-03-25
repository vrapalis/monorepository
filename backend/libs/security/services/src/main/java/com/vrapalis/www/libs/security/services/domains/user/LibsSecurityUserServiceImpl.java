package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.cloud.discovery.domains.app.ELibsCloudDiscoveryAppNames;
import com.vrapalis.www.libs.cloud.discovery.domains.app.LibsCloudDiscoveryAppUriDeliverer;
import com.vrapalis.www.libs.push.api.domains.email.LibsPushApisEmailCall;
import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import com.vrapalis.www.libs.security.dtos.domains.user.*;
import com.vrapalis.www.libs.security.entities.domains.role.LibsSecurityJpaRoleEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserConfirmEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserInfoEntity;
import com.vrapalis.www.libs.security.errors.domains.user.*;
import com.vrapalis.www.libs.security.mappers.domains.user.LibsSecurityMappersUser;
import com.vrapalis.www.libs.security.properties.domains.user.LibsSecurityPropertiesUserSignUpEmailProperties;
import com.vrapalis.www.libs.security.repositories.domains.organization.LibsSecurityJpaOrganizationTypeRepository;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserConfirmEntityRepository;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserEntityRepository;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserInfoEntityRepository;
import com.vrapalis.www.libs.security.services.domains.jwt.LibsSecurityJwtService;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.UUID;

@Service
@Transactional
@AllArgsConstructor
public class LibsSecurityUserServiceImpl implements LibsSecurityUserService {
    private LibsSecurityJpaUserEntityRepository userRepository;
    private AuthenticationManager authenticationManager;
    private LibsSecurityJwtService jwtService;
    private LibsSecurityMappersUser mappersUser;
    private PasswordEncoder passwordEncoder;
    private LibsCloudDiscoveryAppUriDeliverer appUriDeliverer;
    private LibsPushApisEmailCall emailCall;
    private LibsSecurityJpaUserConfirmEntityRepository confirmUserRepository;
    private LibsSecurityPropertiesUserSignUpEmailProperties signUpEmailProperties;
    private LibsSecurityJpaOrganizationTypeRepository organizationTypeRepository;
    private LibsSecurityJpaUserInfoEntityRepository infoEntityRepository;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoSignInUser signInUser)
            throws LibsSecurityErrorSignIn {
        LibsSecurityDtoSignInSuccess authenticationSuccess;
        try {
            final var authenticationToken = new UsernamePasswordAuthenticationToken(signInUser.getEmail(),
                    signInUser.getPassword(), new ArrayList<>());
            final var authenticate = authenticationManager
                    .authenticate(authenticationToken);
            final var authenticatedUser = (UserDetails) authenticate.getPrincipal();
            final var userEntity = userRepository.findFirstByEmail(authenticatedUser.getUsername()).orElseThrow(EntityNotFoundException::new);
            authenticationSuccess = LibsSecurityDtoSignInSuccess.builder()
                    .jwt(jwtService.generateJwtToken(userEntity))
                    .build();
        } catch (Exception ex) {
            throw new LibsSecurityErrorSignIn();
        }
        return ResponseEntity.ok(authenticationSuccess);
    }

    @Override
    @Transactional(rollbackFor = LibsSecurityErrorSignUp.class)
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signUp(LibsSecurityDtosSignUpUser signUpUser)
            throws LibsSecurityErrorSignUp {
        try {
            final var userEntity = mappersUser.signUpDtoMapToUserEntity(signUpUser);
            userEntity.setEmail(userEntity.getEmail().trim());
            prepareUserEntityAccountForSignUp(userEntity);
            prepareUserEntityInfoForSignUp(userEntity);
            prepareUserEntityConfirmForSignUp(userEntity);
            userRepository.saveAndFlush(userEntity);

            final var pushAppUrl = appUriDeliverer.getAppServiceUri(ELibsCloudDiscoveryAppNames.ENTRYOU_PUSH_APP)
                    .map(uri -> uri.toString())
                    .orElseThrow(RuntimeException::new);

            String admitEmailLink = "<a href=" + signUpEmailProperties.getHost()
                    + signUpEmailProperties.getPath()
                    + userEntity.getConfirmEntity().getId()
                    + ">" + signUpEmailProperties.getLinkText() + "</a>";

            final var emailDto = LibsPushDtosEmailDto.builder()
                    .mailTo(userEntity.getEmail())
                    .subject(signUpEmailProperties.getSubject())
                    .text(signUpEmailProperties.getText() + " " + admitEmailLink)
                    .build();

            emailCall.sendEmail(pushAppUrl, emailDto, Object.class);
        } catch (Exception ex) {
            final var signUpException = new LibsSecurityErrorSignUp("Sign up error",
                    "Sign up error, try it later");
            if (ex instanceof DataIntegrityViolationException) {
                signUpException.setDetailedErrorMsg("Provided email exists already");
            }
            throw signUpException;
        }
        return ResponseEntity.ok(new LibsSecurityDtosSignUpSuccessResponse());
    }

    //    TODO OPTIMIZE SQL QUERY, TO MANY THINGS ARE FETCHED
    @Override
    @Transactional(rollbackFor = LibsSecurityErrorSignUpConfirm.class)
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signUpConfirm(UUID id) throws LibsSecurityErrorSignUpConfirm {
        try {
            final var userId = confirmUserRepository.findUserIdByConfirmId(id).orElseThrow(EntityNotFoundException::new);
            final var userEntity = userRepository.findById(userId).orElseThrow(EntityNotFoundException::new);
            final var account = userEntity.getAccount();
            account.setIsEnabled(true);
            account.setAccountNonExpired(true);
            account.setCredentialsNonExpired(true);
            account.setAccountNonLocked(true);
            userEntity.setConfirmEntity(null);
            confirmUserRepository.deleteById(id);
        } catch (Exception ex) {
            throw new LibsSecurityErrorSignUpConfirm();
        }
        return ResponseEntity.ok(new LibsSecurityDtosSignUpConfirmSuccessResponse());
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> resetPassword(LibsSecurityDtosResetPassword dto)
            throws LibsSecurityErrorResetPassword {
        try {
            final var userEntity = userRepository.findFirstByEmail(dto.getEmail())
                    .orElseThrow(EntityNotFoundException::new);

            userEntity.getAccount().setAccountNonLocked(false);
            userEntity.getAccount().setAccountNonExpired(false);
            userEntity.getAccount().setIsEnabled(false);
            userEntity.getAccount().setCredentialsNonExpired(false);

            userEntity.setConfirmEntity(new LibsSecurityJpaUserConfirmEntity(userEntity));
            userRepository.saveAndFlush(userEntity);

            final var pushAppUrl = appUriDeliverer.getAppServiceUri(ELibsCloudDiscoveryAppNames.ENTRYOU_PUSH_APP)
                    .map(uri -> uri.toString())
                    .orElseThrow(RuntimeException::new);

            String admitEmailLink = "<a href=" + signUpEmailProperties.getHost()
                    + signUpEmailProperties.getResetPasswordPath()
                    + userEntity.getConfirmEntity().getId()
                    + ">" + signUpEmailProperties.getResetPasswordLinkText() + "</a>";

            final var emailDto = LibsPushDtosEmailDto.builder()
                    .mailTo(userEntity.getEmail())
                    .subject(signUpEmailProperties.getResetPasswordSubject())
                    .text(signUpEmailProperties.getResetPasswordText() + " " + admitEmailLink)
                    .build();

            emailCall.sendEmail(pushAppUrl, emailDto, Object.class);
        } catch (Exception ex) {
            throw new LibsSecurityErrorResetPassword();
        }
        return ResponseEntity.ok(new LibsSecurityDtosResetPasswordSuccessResponse());
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> resetPasswordConfirm(LibsSecurityDtosResetPasswordConfirm dto)
            throws LibsSecurityErrorResetPasswordConfirm {
        try {
            final var userId = confirmUserRepository.findUserIdByConfirmId(dto.getConfirmId())
                    .orElseThrow(EntityNotFoundException::new);
            final var userEntity = userRepository.findById(userId)
                    .orElseThrow(EntityNotFoundException::new);
            userEntity.getAccount().setPassword(passwordEncoder.encode(dto.getPassword().trim()));
            userEntity.getAccount().setAccountNonExpired(true);
            userEntity.getAccount().setAccountNonLocked(true);
            userEntity.getAccount().setIsEnabled(true);
            userEntity.getAccount().setCredentialsNonExpired(true);
            userEntity.setConfirmEntity(null);
            confirmUserRepository.deleteById(dto.getConfirmId());
        } catch (Exception ex) {
            throw new LibsSecurityErrorResetPasswordConfirm();
        }
        return ResponseEntity.ok(new LibsSecurityDtosResetPasswordConfirmSuccessResponse());
    }

    @Override
    public ResponseEntity<LibsSecurityDtoUserInfo> getUserInfoById(Integer id) throws LibsSecurityErrorEntityNotFound {
        LibsSecurityDtoUserInfo infoDto;
        try {
            final var infoEntity = infoEntityRepository.findById(id).orElseThrow(EntityNotFoundException::new);
             infoDto = mappersUser.mapUserInfoEntityToDto(infoEntity);
        } catch (Exception ex) {
            throw new LibsSecurityErrorEntityNotFound(id);
        }
        return ResponseEntity.ok(infoDto);
    }

    private void prepareUserEntityConfirmForSignUp(LibsSecurityJpaUserEntity userEntity) {
        userEntity.setConfirmEntity(new LibsSecurityJpaUserConfirmEntity(userEntity));
    }

    private void prepareUserEntityInfoForSignUp(LibsSecurityJpaUserEntity userEntity) {
        userEntity.getInfo().setUser(userEntity);
        final var organizationType = organizationTypeRepository.findByName(userEntity.getInfo().getOrganizationType().getName())
                .orElseThrow(EntityNotFoundException::new);
        userEntity.getInfo().setOrganizationType(organizationType);
        userEntity.getInfo().setFirstName(userEntity.getInfo().getFirstName().trim());
        userEntity.getInfo().setSurname(userEntity.getInfo().getSurname().trim());
    }

    private final void prepareUserEntityAccountForSignUp(LibsSecurityJpaUserEntity userEntity) {
        userEntity.getAccount().setUser(userEntity);
        userEntity.getAccount().setAccountNonExpired(Boolean.FALSE);
        userEntity.getAccount().setAccountNonLocked(Boolean.FALSE);
        userEntity.getAccount().setCredentialsNonExpired(Boolean.FALSE);
        userEntity.getAccount().setIsEnabled(Boolean.FALSE);
        userEntity.getAccount().setPassword(passwordEncoder.encode(userEntity.getAccount().getPassword().trim()));
        userEntity.setRoles(
                Collections.singleton(
                        LibsSecurityJpaRoleEntity.builder()
                                .name("user")
                                .description("Simple user role")
                                .build()
                )
        );
    }
}
