package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.error;

import lombok.Value;
import org.springframework.http.HttpStatus;

@Value
public class OAuth2UserForgotPasswordException extends RuntimeException {
    private HttpStatus httpStatus;
    private String msg;
}
