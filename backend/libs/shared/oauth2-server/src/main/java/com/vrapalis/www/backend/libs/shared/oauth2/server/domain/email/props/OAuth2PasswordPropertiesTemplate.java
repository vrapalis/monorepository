package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotNull;

@Data
@Validated
@Configuration
@NoArgsConstructor
@ConfigurationProperties(prefix = "com.vrapalis.www.oauth2.email.password")
public class OAuth2PasswordPropertiesTemplate {

    @NotNull
    private String host;

    @NotNull
    private String subject;

    @NotNull
    private String text;

    @NotNull
    private String passwordPath;
}
