package de.delloit.www.backend.libs.shared.security.domain.jwt.util;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ESharedSecurityJwtClaims {
    IS_ACCOUNT_NON_EXPIRED("isAccountNonExpired"),
    IS_ACCOUNT_NON_LOCKED("isAccountNonLocked"),
    IS_CREDENTIALS_NON_EXPIRED("isCredentialsNonExpired"),
    IS_ENABLED("isEnabled"),
    AUTHORITIES("authorities");

    private String claimName;
}
