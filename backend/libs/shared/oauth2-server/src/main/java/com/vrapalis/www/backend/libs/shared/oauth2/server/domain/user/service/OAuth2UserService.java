package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserForgotPasswordDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationCodeDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserResetPasswordDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.OAuth2UserModel;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.BindingResult;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

public interface OAuth2UserService extends UserDetailsService {

    ResponseEntity<AbstractServerResponseDto> registration(OAuth2UserRegistrationDto user, BindingResult bindingResult,
                                                           HttpServletResponse response, HttpServletRequest request);

    void completeRegistration(UUID userId);

    UUID forgotPassword(@NonNull String email);

    ResponseEntity<AbstractServerResponseDto> registrationCode(OAuth2UserRegistrationCodeDto code,
                                                               BindingResult bindingResult,
                                                               HttpServletResponse response, HttpServletRequest request);

    ResponseEntity<AbstractServerResponseDto> forgotPassword(OAuth2UserForgotPasswordDto dto,
                                                             BindingResult bindingResult,
                                                             HttpServletResponse response, HttpServletRequest request);

    ResponseEntity<AbstractServerResponseDto> resetPassword(OAuth2UserResetPasswordDto dto, BindingResult bindingResult,
                                                            HttpServletResponse response, HttpServletRequest request);

    OAuth2UserEntity save(OAuth2UserModel user, String clientRegistrationId);
}
