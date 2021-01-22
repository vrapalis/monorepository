package com.vrapalis.www.libs.security.services.configs;

import com.auth0.jwt.algorithms.Algorithm;
import com.vrapalis.www.libs.security.services.domains.jwt.LibsSecurityJwtProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LibSecurityServicesMainConfiguration {
    @Bean
    public Algorithm algorithm(LibsSecurityJwtProperties jwtProperties) {
        return Algorithm.HMAC256(jwtProperties.getSecret());
    }
}
