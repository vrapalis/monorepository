package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserDto {
    private String id;
    private String surname;
    private String forename;
    private String email;
}
