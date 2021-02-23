package com.vrapalis.www.libs.security.mappers.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtosSignUpUser;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.mappers.domains.common.LibsSecurityMapperDefaultFactory;
import org.mapstruct.*;


@Mapper(
        componentModel = "spring",
        injectionStrategy = InjectionStrategy.CONSTRUCTOR,
        uses = LibsSecurityMapperDefaultFactory.class,
        nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT
)
public interface LibsSecurityMappersUser {

    @Mappings({
            @Mapping(target = "account.password", source = "password"),
            @Mapping(target = "info.firstName", source = "firstName"),
            @Mapping(target = "info.surname", source = "surname"),
            @Mapping(target = "createdDate", ignore = true),
            @Mapping(target = "createdBy", ignore = true),
            @Mapping(target = "modifiedDate", ignore = true),
            @Mapping(target = "modifiedBy", ignore = true),
            @Mapping(target = "roles", ignore = true),
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "info.organizationType.name", source = "organizationTypeName")
    })
    LibsSecurityJpaUserEntity signUpDtoMapToUserEntity(LibsSecurityDtosSignUpUser userDto);
}
