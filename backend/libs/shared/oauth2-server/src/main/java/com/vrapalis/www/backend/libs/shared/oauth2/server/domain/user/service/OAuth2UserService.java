package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationExceptionDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.UUID;

public interface OAuth2UserService extends UserDetailsService {

    ResponseEntity<AbstractServerResponseDto> registration(OAuth2UserRegistrationExceptionDto user);

    void completeRegistration(UUID userId);
}
