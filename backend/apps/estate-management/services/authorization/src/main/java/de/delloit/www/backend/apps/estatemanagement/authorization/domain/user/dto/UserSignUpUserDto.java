package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSignUpUserDto {
    private String mobilePhone;
}
