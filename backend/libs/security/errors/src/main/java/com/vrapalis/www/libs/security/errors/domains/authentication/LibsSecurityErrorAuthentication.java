package com.vrapalis.www.libs.security.errors.domains.authentication;

import com.vrapalis.www.libs.security.errors.domains.authentication.common.LibsSecurityErrorAbstract;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@Builder
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityErrorAuthentication extends LibsSecurityErrorAbstract {
    private String errorMsg = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_ERROR_MSG;
    private String detailedErrorMsg = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_DETAIL_ERROR_MSG;
}
