package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Configuration
@ConfigurationProperties(prefix = "spring.mail")
public class OAuth2EmailServerProperties {
    private String host;
    private int port;
    private String username;
}
