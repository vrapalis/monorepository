package com.vrapalis.www.backend.libs.shared.oauth2.server.config.profile;

import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Profile("local")
@AllArgsConstructor
@EnableWebSecurity(debug = true)
public class OAuth2ServerLocalProfileConfiguration {


    @Bean
    public CommandLineRunner commandLineRunner() {
        return args -> {
        };
    }
}
