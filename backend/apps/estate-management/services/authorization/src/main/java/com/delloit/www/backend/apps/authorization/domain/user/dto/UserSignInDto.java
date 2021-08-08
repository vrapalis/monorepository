package com.delloit.www.backend.apps.authorization.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserSignInDto {
    private String email;
    private String password;
}
