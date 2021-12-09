package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2ForgotPasswordException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2RegistrationCodeException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2RegistrationException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2ResetPasswordException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.error.OAuth2SendEmailError;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.model.OAuth2EmailSendDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props.OAuth2PasswordPropertiesTemplate;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props.OAuth2RegistrationPropertiesTemplate;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.service.OAuth2EmailService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserForgotPasswordDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationCodeDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserResetPasswordDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.*;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.OAuth2UserDetailsModel;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.OAuth2UserRepository;
import de.delloit.www.backend.libs.shared.assertion.domain.common.CommonSharedAssertions;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;
import java.util.UUID;

@Log4j2
@Service
@Transactional
@AllArgsConstructor
public class OAuth2UserServiceImpl implements OAuth2UserService {

    private OAuth2EmailService emailService;
    private OAuth2UserRepository userRepository;
    private OAuth2UserRegistrationCodeService codeService;
    private OAuth2UserPasswordCodeService passwordCodeService;
    private OAuth2RegistrationPropertiesTemplate registrationPropertiesTemplate;
    private OAuth2PasswordPropertiesTemplate passwordPropertiesTemplate;

    @Override
    public ResponseEntity<AbstractServerResponseDto> registration(OAuth2UserRegistrationDto user,
                                                                  BindingResult bindingResult,
                                                                  HttpServletResponse response,
                                                                  HttpServletRequest request) {

        try {
            CommonSharedAssertions.assertNoBeanValidationErrors(bindingResult);
            CommonSharedAssertions.assertPasswordIsSame(user.getPassword(), user.getPasswordRepeated());

            final var userInfo = new OAuth2UserInfoEntity();

            final var accountEntity = new OAuth2UserAccountEntity();
            accountEntity.setPassword(user.getPassword());
            accountEntity.setAccountNonExpired(false);
            accountEntity.setAccountNonLocked(false);
            accountEntity.setCredentialsNonExpired(false);
            accountEntity.setIsEnabled(false);

            final var codeEntity = new OAuth2UserRegistrationCodeEntity();
            codeEntity.setCode(UUID.randomUUID());

            final var userEntity = new OAuth2UserEntity();
            userEntity.setEmail(user.getEmail());
            userInfo.setUser(userEntity);
            userEntity.setInfo(userInfo);
            accountEntity.setUser(userEntity);
            userEntity.setAccount(accountEntity);
            userEntity.setRegistrationCode(codeEntity);
            codeEntity.setUser(userEntity);
            final var registeredUser = userRepository.saveAndFlush(userEntity);

            final var link = request.getScheme() + "://" + request.getRemoteHost() + ":" + request.getServerPort()
                    + registrationPropertiesTemplate.getRegistrationPath() + codeEntity.getCode();

            final var emailDto = OAuth2EmailSendDto.builder()
                    .mailTo(registeredUser.getEmail())
                    .subject(registrationPropertiesTemplate.getSubject())
                    .text(String.format(registrationPropertiesTemplate.getText(), link))
                    .build();

            emailService.sendMimeMessage(emailDto);

        } catch (Exception e) {
            log.error(e);
            if (e instanceof OAuth2SendEmailError) {
                throw new OAuth2RegistrationException(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong, try it again latter.");
            }
            if (e instanceof DataIntegrityViolationException) {
                throw new OAuth2RegistrationException(HttpStatus.BAD_REQUEST, "Email already exists.");
            }
            throw new OAuth2RegistrationException(HttpStatus.BAD_REQUEST, e.getMessage());
        }

        return ResponseEntity.ok(new SuccessServerResponseDto("Success", "Registration Success."));
    }

    @Override
    public void completeRegistration(UUID userId) {
        final var foundUserEntity = userRepository.findById(userId).orElseThrow(EntityNotFoundException::new);
        final var account = foundUserEntity.getAccount();
        account.setIsEnabled(true);
        account.setAccountNonLocked(true);
        account.setAccountNonExpired(true);
        account.setCredentialsNonExpired(true);
        foundUserEntity.setRegistrationCode(null);
        codeService.deleteByUserId(userId);
    }

    @Override
    public UUID forgotPassword(@NonNull String email) {
        final var foundUser = userRepository.findByEmail(email).orElseThrow(EntityNotFoundException::new);
        final var passwordCodeEntity = new OAuth2UserPasswordCodeEntity();
        passwordCodeEntity.setUser(foundUser);
        passwordCodeEntity.setCode(UUID.randomUUID());
        foundUser.setPasswordCode(passwordCodeEntity);
        userRepository.saveAndFlush(foundUser);
        return passwordCodeEntity.getCode();
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> registrationCode(OAuth2UserRegistrationCodeDto code,
                                                                      BindingResult bindingResult,
                                                                      HttpServletResponse response,
                                                                      HttpServletRequest request) {
        try {
            final var codeEntity = codeService.findByCode(code.getCode());
            final var foundUserEntity = userRepository.findById(codeEntity.getUserId())
                    .orElseThrow(EntityNotFoundException::new);
            final var account = foundUserEntity.getAccount();
            account.setIsEnabled(true);
            account.setAccountNonLocked(true);
            account.setAccountNonExpired(true);
            account.setCredentialsNonExpired(true);
            foundUserEntity.setRegistrationCode(null);
            codeService.deleteByUserId(codeEntity.getUserId());
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new OAuth2RegistrationCodeException(HttpStatus.INTERNAL_SERVER_ERROR, "Registration error.");
        }

        return ResponseEntity.ok(new SuccessServerResponseDto("Success", "Registration Success."));
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> forgotPassword(OAuth2UserForgotPasswordDto dto,
                                                                    BindingResult bindingResult,
                                                                    HttpServletResponse response,
                                                                    HttpServletRequest request) {
        try {
            CommonSharedAssertions.assertNoBeanValidationErrors(bindingResult);
            final var userEntity = userRepository.findByEmail(dto.getEmail()).orElseThrow(EntityNotFoundException::new);
            final var passwordCodeEntity = new OAuth2UserPasswordCodeEntity();
            passwordCodeEntity.setUser(userEntity);
            passwordCodeEntity.setCode(UUID.randomUUID());
            userEntity.setPasswordCode(passwordCodeEntity);
            userRepository.saveAndFlush(userEntity);

            final var link = request.getScheme() + "://" + request.getRemoteHost() + ":" + request.getServerPort()
                    + passwordPropertiesTemplate.getPasswordPath() + passwordCodeEntity.getCode();

            final var emailDto = OAuth2EmailSendDto.builder()
                    .mailTo(userEntity.getEmail())
                    .subject(passwordPropertiesTemplate.getSubject())
                    .text(String.format(passwordPropertiesTemplate.getText(), link))
                    .build();

            emailService.sendMimeMessage(emailDto);

        } catch (Exception e) {
            log.error(e);
            if (e instanceof BeanValidationSharedError) {
                throw new OAuth2ForgotPasswordException(HttpStatus.BAD_REQUEST, e.getMessage());
            }
            throw new OAuth2ForgotPasswordException(HttpStatus.INTERNAL_SERVER_ERROR, "Forgot password error.");
        }
        return ResponseEntity.ok(new SuccessServerResponseDto("Success", "The email was send."));
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> resetPassword(OAuth2UserResetPasswordDto dto,
                                                                   BindingResult bindingResult,
                                                                   HttpServletResponse response,
                                                                   HttpServletRequest request) {
        try {
            CommonSharedAssertions.assertPasswordIsSame(dto.getPassword(), dto.getPasswordRepeated());
            final var passwordCodeEntity = passwordCodeService.findByCode(dto.getCode());
            final var userEntity = userRepository.findById(passwordCodeEntity.getUserId())
                    .orElseThrow(EntityNotFoundException::new);
            userEntity.getAccount().setPassword(dto.getPassword());
            userEntity.setPasswordCode(null);
            passwordCodeService.deleteByUserId(userEntity.getId());
        } catch (Exception e) {
            log.error(e);
            if(e instanceof BeanValidationSharedError) {
                throw new OAuth2ResetPasswordException(HttpStatus.BAD_REQUEST, e.getMessage());
            }
            throw new OAuth2ResetPasswordException(HttpStatus.INTERNAL_SERVER_ERROR, "Reset password error.");
        }
        return ResponseEntity.ok(new SuccessServerResponseDto("Success", "Password was successfully reset."));
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final var oAuth2UserDetailsModel = userRepository.findByEmail(email).map(OAuth2UserDetailsModel::new).orElseThrow(EntityNotFoundException::new);
        return userRepository.findByEmail(email).map(OAuth2UserDetailsModel::new).orElseThrow(EntityNotFoundException::new);
    }
}
