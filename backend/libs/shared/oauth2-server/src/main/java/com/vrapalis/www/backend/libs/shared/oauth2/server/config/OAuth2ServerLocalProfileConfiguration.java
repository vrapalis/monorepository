package com.vrapalis.www.backend.libs.shared.oauth2.server.config;

import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Profile("local")
@EnableWebSecurity(debug = true)
public class OAuth2ServerLocalProfileConfiguration {
}
