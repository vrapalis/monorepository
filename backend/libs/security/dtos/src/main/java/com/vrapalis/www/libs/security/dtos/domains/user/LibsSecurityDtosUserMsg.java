package com.vrapalis.www.libs.security.dtos.domains.user;

import lombok.experimental.UtilityClass;

@UtilityClass
public class LibsSecurityDtosUserMsg {
    public static final String SIGN_UP_SUCCESS_MSG = "Sign up success, you will receive email to confirm the sign up process";
    public static final String SIGN_UP_ERROR_MSG = "Sign up error";
    public static final String SIGN_UP_ERROR_DETAILED_MSG = "Sign up error, try it later";
    public static final String SIGN_UP_CONFIRM_SUCCESS_MSG = "Sign up confirm success";
    public static final String SIGN_UP_CONFIRM_ERROR_MSG = "Sign up confirm error";
    public static final String SIGN_UP_CONFIRM_ERROR_DETAILED_MSG = "Sign up confirm error, confirm id not exists may be";
    public static final String RESET_PASSWORD_SUCCESS_MSG = "Reset password success, after confirm email you will be able to sign in";
    public static final String RESET_PASSWORD_ERROR_MSG = "Reset password failed";
    public static final String RESET_PASSWORD_ERROR_DETAILED_MSG = "Reset password failed, try it later";
    public static final String RESET_PASSWORD_CONFIRM_SUCCESS_MSG = "Reset password successful";
    public static final String RESET_PASSWORD_CONFIRM_ERROR_MSG = "Reset password failed.";
    public static final String RESET_PASSWORD_ERROR_CONFIRM_DETAILED_MSG = "Reset password failed, try it later.";
}
