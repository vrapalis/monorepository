package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRegistrationDto {
    @Email
    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 6, max = 10)
    private String password;

    @NotBlank
    @Size(min = 6, max = 10)
    private String repeatedPassword;
}
