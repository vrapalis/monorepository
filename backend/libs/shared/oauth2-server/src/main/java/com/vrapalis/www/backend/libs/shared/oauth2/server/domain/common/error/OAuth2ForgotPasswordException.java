package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error;

import lombok.Value;
import org.springframework.http.HttpStatus;

@Value
public class OAuth2ForgotPasswordException extends RuntimeException {
    private HttpStatus httpStatus;
    private String msg;
}
