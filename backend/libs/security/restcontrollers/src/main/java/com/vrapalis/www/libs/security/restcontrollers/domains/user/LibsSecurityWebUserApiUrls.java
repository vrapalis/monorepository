package com.vrapalis.www.libs.security.restcontrollers.domains.user;

import com.vrapalis.www.libs.security.restcontrollers.domains.common.LibsSecurityWebApiUrls;

public final class LibsSecurityWebUserApiUrls {
    public LibsSecurityWebUserApiUrls() throws IllegalAccessError {
        throw new IllegalAccessError();
    }

    public static final String BASE_USER_API_URL_V1 = LibsSecurityWebApiUrls.BASE_API_URL_V1 + "/users";
    public static final String USER_API_INFO_URL_V1 = "/info";
    public static final String USER_API_SIGN_IN_URL_V1 = "/sign-in";
    public static final String USER_API_SIGN_UP_URL_V1 = "/sign-up";
    public static final String USER_API_RESET_PASSWORD_URL_V1 = "/reset-password";
    public static final String USER_API_RESET_PASSWORD_CONFIRM_URL_V1 = USER_API_RESET_PASSWORD_URL_V1 + "/confirm";
}
