package de.delloit.www.backend.apps.estatemanagement.push.domain.email;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailSendDto {
    @Email
    @NotNull
    private String mailTo;

    @NotNull
    @Size(min = 1, max = 160)
    private String subject;

    @NotNull
    @Size(min = 1, max = 560)
    private String text;
}
