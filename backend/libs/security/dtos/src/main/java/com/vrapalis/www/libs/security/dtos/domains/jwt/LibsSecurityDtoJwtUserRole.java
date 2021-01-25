package com.vrapalis.www.libs.security.dtos.domains.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LibsSecurityDtoJwtUserRole {
    private String name;
    private String description;
    private List<LibsSecurityDtoJwtUserAuthority> authorities;
}
