package de.delloit.www.backend.apps.estatemanagement.authorization.domain.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

// TODO extract to library
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SmsSendDto {
//    @Pattern(regexp = "^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$")
    private String phoneNumber;

    @NotNull
    private String from;

    @NotNull
    private String msg;
}
