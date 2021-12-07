package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public class OAuth2RegistrationException extends Exception {
    @Getter
    private HttpStatus httpStatus;
    public OAuth2RegistrationException(HttpStatus httpStatus,String s) {
        super(s);
        this.httpStatus = httpStatus;
    }
}
