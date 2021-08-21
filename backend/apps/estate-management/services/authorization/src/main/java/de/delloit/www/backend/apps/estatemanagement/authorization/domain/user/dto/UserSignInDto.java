package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

// TODO EXTEND FROM SING UP CLASS?
@Data
@AllArgsConstructor
public class UserSignInDto {
    @Pattern(regexp = "^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$")
    private String mobilePhone;

    @Length(min = 4, max = 4)
    private String password;
}
