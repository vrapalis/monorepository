package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@NoArgsConstructor
@ConfigurationProperties(prefix = "com.vrapalis.www.oauth2.email.password")
public class OAuth2PasswordPropertiesTemplate {
    private String subject;
    private String text;
}
