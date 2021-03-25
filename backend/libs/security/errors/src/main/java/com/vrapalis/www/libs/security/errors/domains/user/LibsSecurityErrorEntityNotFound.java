package com.vrapalis.www.libs.security.errors.domains.user;

import lombok.Value;

@Value
public class LibsSecurityErrorEntityNotFound extends RuntimeException{
    private Integer userId;
}
