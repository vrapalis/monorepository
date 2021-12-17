package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.properties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "com.vrapalis.www.oauth2.clients")
public class OAuth2ClientRegistrationProperties {
    /**
     * Key should be matched by the @{@link org.springframework.security.oauth2.client.registration.ClientRegistration}
     * registration id.
     */
    private Map<String, List<String>> classes;
}
