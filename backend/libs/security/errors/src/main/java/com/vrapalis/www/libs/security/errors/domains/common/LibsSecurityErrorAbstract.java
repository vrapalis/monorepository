package com.vrapalis.www.libs.security.errors.domains.common;

public abstract class LibsSecurityErrorAbstract extends Exception {
    public abstract String getErrorMsg();

    public abstract String getDetailedErrorMsg();
}
