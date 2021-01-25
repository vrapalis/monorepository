package com.vrapalis.www.libs.security.dtos.domains.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class LibsSecurityDtoJwtUser {
    private LibsSecurityDtoJwtUserAccount account;
    private LibsSecurityDtoJwtUserInfo info;
    private List<LibsSecurityDtoJwtUserRole> roles;
}
