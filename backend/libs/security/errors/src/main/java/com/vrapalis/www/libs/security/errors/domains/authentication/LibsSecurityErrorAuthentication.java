package com.vrapalis.www.libs.security.errors.domains.authentication;

import com.vrapalis.www.libs.security.errors.domains.authentication.common.LibsSecurityErrorAbstract;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityErrorAuthentication extends LibsSecurityErrorAbstract {
    private final String errorMsg = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_ERROR_MSG;
    private final String detailedErrorMsg = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_DETAIL_ERROR_MSG;
}

