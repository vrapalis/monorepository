package com.vrapalis.www.libs.security.mappers.domains.common;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtosSignUpUser;
import com.vrapalis.www.libs.security.entities.domains.account.LibsSecurityJpaAccountEntity;
import com.vrapalis.www.libs.security.entities.domains.authority.LibsSecurityJpaAuthorityEntity;
import com.vrapalis.www.libs.security.entities.domains.role.LibsSecurityJpaRoleEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserInfoEntity;

import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public final class GivenTestData {

    private GivenTestData() throws IllegalAccessException {
        throw new IllegalAccessException();
    }

    public static LibsSecurityJpaUserEntity givenUserEntity() {
        return LibsSecurityJpaUserEntity.builder()
                .id(1)
                .email("email@email.com")
                .info(givenUserInfo())
                .account(givenAccountUser())
                .roles(givenRoles())
                .build();
    }

    private static Set<LibsSecurityJpaRoleEntity> givenRoles() {
        return new HashSet<>(Arrays.asList(
                LibsSecurityJpaRoleEntity.builder()
                        .id(1)
                        .name("ADMIN")
                        .description("Admin role")
                        .authorities(new HashSet(
                                Arrays.asList(
                                        LibsSecurityJpaAuthorityEntity.builder()
                                                .id(1)
                                                .name("CREATE:USER")
                                                .description("Create user")
                                                .build()
                                )
                        ))
                        .build()
        ));
    }

    public static LibsSecurityJpaAccountEntity givenAccountUser() {
        return LibsSecurityJpaAccountEntity.builder()
                .id(1)
                .password("password")
                .accountNonExpired(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .isEnabled(true)
                .modifiedBy("unknown")
                .modifiedDate(new Date())
                .createdBy("unknown")
                .createdDate(new Date())
                .build();
    }

    public static LibsSecurityJpaUserInfoEntity givenUserInfo() {
        return LibsSecurityJpaUserInfoEntity.builder()
                .id(1)
                .firstName("Firstname")
                .surname("Surname")
                .age(18)
                .createdBy("unknown")
                .createdDate(new Date())
                .modifiedBy("unknown")
                .modifiedDate(new Date())
                .build();
    }

    public static LibsSecurityDtosSignUpUser givenSignUpUser() {
        return LibsSecurityDtosSignUpUser.builder()
                .email("email@email.com")
                .surname("surname")
                .firstName("Firstname")
                .password("password")
                .build();
    }
}
