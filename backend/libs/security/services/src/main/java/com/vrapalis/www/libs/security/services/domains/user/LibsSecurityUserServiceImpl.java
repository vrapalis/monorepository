package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.cloud.discovery.domains.app.ELibsCloudDiscoveryAppNames;
import com.vrapalis.www.libs.cloud.discovery.domains.app.LibsCloudDiscoveryAppUriDeliverer;
import com.vrapalis.www.libs.push.api.domains.email.LibsPushApisEmailCall;
import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignInSuccess;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignInUser;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtosSignUpSuccessResponse;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtosSignUpUser;
import com.vrapalis.www.libs.security.entities.domains.role.LibsSecurityJpaRoleEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserConfirmEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignIn;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignUp;
import com.vrapalis.www.libs.security.mappers.domains.user.LibsSecurityMappersUser;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserEntityRepository;
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
import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;

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

            final var emailDto = LibsPushDtosEmailDto.builder()
                    .mailTo(userEntity.getEmail())
                    .subject("Registration")
                    .text("<a href=''>Registration</a>")
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

    private void prepareUserEntityConfirmForSignUp(LibsSecurityJpaUserEntity userEntity) {
        userEntity.setConfirmEntity(new LibsSecurityJpaUserConfirmEntity(userEntity));
    }

    private void prepareUserEntityInfoForSignUp(LibsSecurityJpaUserEntity userEntity) {
        userEntity.getInfo().setUser(userEntity);
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
