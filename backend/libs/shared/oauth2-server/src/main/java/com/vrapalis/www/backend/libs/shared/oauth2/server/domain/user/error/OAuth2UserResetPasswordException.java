package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class OAuth2UserResetPasswordException extends RuntimeException {
    private HttpStatus httpStatus;
    private String msg;
}
