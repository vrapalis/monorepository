package com.vrapalis.www.libs.security.services;

import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;

public final class GivenTestData {
    private GivenTestData() throws IllegalAccessException {
        throw new IllegalAccessException();
    }

    public static LibsSecurityJpaUserEntity giveUserEntity() {
        return LibsSecurityJpaUserEntity.builder()

                .build();
    }
}
