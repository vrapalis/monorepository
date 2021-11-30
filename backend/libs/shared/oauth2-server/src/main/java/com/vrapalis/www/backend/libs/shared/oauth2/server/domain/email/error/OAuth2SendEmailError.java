package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.error;

public class OAuth2SendEmailError extends Exception {
    public OAuth2SendEmailError(String message) {
        super(message);
    }
}
