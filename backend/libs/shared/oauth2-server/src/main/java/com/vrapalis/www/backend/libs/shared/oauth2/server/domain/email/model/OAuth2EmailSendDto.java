package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.model;


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
public class OAuth2EmailSendDto {
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
