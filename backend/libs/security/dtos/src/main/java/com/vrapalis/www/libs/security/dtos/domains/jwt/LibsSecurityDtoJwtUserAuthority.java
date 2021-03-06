package com.vrapalis.www.libs.security.dtos.domains.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LibsSecurityDtoJwtUserAuthority {
    private String name;
    private String description;
}
