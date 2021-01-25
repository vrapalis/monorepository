package com.vrapalis.www.libs.security.errors.domains.authentication;

import com.vrapalis.www.libs.security.errors.domains.common.LibsSecurityErrorAbstract;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityErrorSignIn extends LibsSecurityErrorAbstract {
    private final String errorMsg = LibsSecurityErrorAuthenticationMsg.SIGN_IN_ERROR_MSG;
    private final String detailedErrorMsg = LibsSecurityErrorAuthenticationMsg.SIGN_IN_DETAIL_ERROR_MSG;
}

