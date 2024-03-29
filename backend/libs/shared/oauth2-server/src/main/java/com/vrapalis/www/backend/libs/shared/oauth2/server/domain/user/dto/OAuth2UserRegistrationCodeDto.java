package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OAuth2UserRegistrationCodeDto {

    @NotNull
    private UUID code;
}
