package com.vrapalis.www.libs.security.projections.domains.user;

public interface UserConfirmOnlyUserIdProjection {
    UserOnlyIdProjection getUserEntity();

    interface UserOnlyIdProjection {
        Long getId();
    }
}
