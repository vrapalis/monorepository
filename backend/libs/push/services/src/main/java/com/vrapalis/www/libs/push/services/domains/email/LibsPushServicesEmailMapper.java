package com.vrapalis.www.libs.push.services.domains.email;

import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import com.vrapalis.www.libs.push.entities.domains.email.LibsPushEntitiesEmailEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface LibsPushServicesEmailMapper {
    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "createdDate", ignore = true)
    })
    LibsPushEntitiesEmailEntity toEntity(LibsPushDtosEmailDto emailDto);

    @InheritInverseConfiguration
    LibsPushDtosEmailDto toDto(LibsPushEntitiesEmailEntity emailEntity);

}
