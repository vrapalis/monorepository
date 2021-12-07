package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2RegistrationCodeException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2RegistrationException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationCodeDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationDto;
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
                                                           HttpServletResponse response, HttpServletRequest request)
            throws OAuth2RegistrationException;

    void completeRegistration(UUID userId);

    UUID forgotPassword(@NonNull String email);

    ResponseEntity<AbstractServerResponseDto> registrationCode(OAuth2UserRegistrationCodeDto code,
                                                               BindingResult bindingResult,
                                                               HttpServletResponse response, HttpServletRequest request)
            throws OAuth2RegistrationCodeException;
}
