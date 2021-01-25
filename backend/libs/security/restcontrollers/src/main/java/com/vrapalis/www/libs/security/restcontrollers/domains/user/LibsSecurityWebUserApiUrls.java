package com.vrapalis.www.libs.security.restcontrollers.domains.user;


import com.vrapalis.www.libs.security.restcontrollers.domains.common.LibsSecurityWebApiUrls;

public final class LibsSecurityWebUserApiUrls {
    public LibsSecurityWebUserApiUrls() throws IllegalAccessError {
    }

    public static final String BASE_USER_API_URL_V1 = LibsSecurityWebApiUrls.BASE_API_URL_V1 + "/users";
    public static final String USER_API_SIGN_IN_URL_V1 = "/sign-in";
    public static final String USER_API_SIGN_UP_URL_V1 = "/sign-up";
}
