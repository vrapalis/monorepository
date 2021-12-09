package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OAuth2UserResetPasswordDto {

    @NotNull
    private UUID code;

    @NotBlank
    @Size(min = 6, max = 10)
    private String password;

    @NotBlank
    @Size(min = 6, max = 10)
    private String passwordRepeated;

}
