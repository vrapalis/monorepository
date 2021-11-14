package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.UserRegistrationDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    ResponseEntity<AbstractServerResponseDto> registration(UserRegistrationDto user);
}
