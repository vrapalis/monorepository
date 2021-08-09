package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserSignInDto {
    private String email;
    private String password;
}
