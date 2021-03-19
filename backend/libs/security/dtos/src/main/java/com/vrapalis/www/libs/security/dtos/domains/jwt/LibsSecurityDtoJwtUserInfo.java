package com.vrapalis.www.libs.security.dtos.domains.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LibsSecurityDtoJwtUserInfo {
    private String surname;
    private String firstName;
    private Byte age;
    private String organizationTypeName;
    private Integer id;
}
