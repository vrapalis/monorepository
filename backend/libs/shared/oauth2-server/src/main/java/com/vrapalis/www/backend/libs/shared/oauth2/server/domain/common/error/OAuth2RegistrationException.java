package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class OAuth2RegistrationException extends RuntimeException {
    private HttpStatus httpStatus;
    private String msg;
}
