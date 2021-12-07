package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OAuth2UserRegistrationDto {
    @Email
    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 6, max = 10)
    private String password;

    @NotBlank
    @Size(min = 6, max = 10)
    private String passwordRepeated;

    @Size(min = 6, max = 20)
    private String clientId;

    @Size(min = 6, max = 60)
    private String redirectUrl;
}
