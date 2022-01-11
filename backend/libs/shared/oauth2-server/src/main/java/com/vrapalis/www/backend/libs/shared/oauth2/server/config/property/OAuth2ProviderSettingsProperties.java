package com.vrapalis.www.backend.libs.shared.oauth2.server.config.property;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;

@Data
@Validated
@NoArgsConstructor
@ConfigurationProperties("spring.security.oauth2.resourceserver.jwt")
public class OAuth2ProviderSettingsProperties {

    @NotBlank
    private String issuerUri;
}
