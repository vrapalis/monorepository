package com.vrapalis.www.libs.security.mappers.domains.jwt;

import com.vrapalis.www.libs.security.dtos.domains.jwt.LibsSecurityDtoJwtUser;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface LibsSecurityMappersJwt {
    @Mappings({
            @Mapping(target = "account.accountNonExpired", source = "account.accountNonExpired"),
            @Mapping(target = "info.organizationTypeName", source = "info.organizationType.name")
    })
    LibsSecurityDtoJwtUser mapToJwtUser(LibsSecurityJpaUserEntity userEntity);
}
