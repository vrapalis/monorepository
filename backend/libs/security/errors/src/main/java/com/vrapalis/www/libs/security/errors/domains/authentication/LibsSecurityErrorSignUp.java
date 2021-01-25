package com.vrapalis.www.libs.security.errors.domains.authentication;

import com.vrapalis.www.libs.security.errors.domains.common.LibsSecurityErrorAbstract;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityErrorSignUp extends LibsSecurityErrorAbstract {
    private String errorMsg = "";
    private String detailedErrorMsg = "";
}
