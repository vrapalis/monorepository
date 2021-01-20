package com.vrapalis.www.libs.security.errors.domains.authentication;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

public final class LibsSecurityErrorAuthenticationMsg {
    public static final String AUTHENTICATION_ERROR_MSG = "Authentication error";
    public static final String AUTHENTICATION_DETAIL_ERROR_MSG = "Provided credentials are not correct";
    public static final String AUTHENTICATION_PATH = ServletUriComponentsBuilder.fromCurrentRequestUri().toUriString();

    public LibsSecurityErrorAuthenticationMsg() throws IllegalAccessException {
        throw new IllegalAccessException();
    }
}
