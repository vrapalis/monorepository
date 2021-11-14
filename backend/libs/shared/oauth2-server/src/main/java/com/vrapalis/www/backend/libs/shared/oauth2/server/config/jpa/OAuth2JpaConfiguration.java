package com.vrapalis.www.backend.libs.shared.oauth2.server.config.jpa;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class OAuth2JpaConfiguration {
    @Bean
    public AuditorAware<String> auditorProvider() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return () -> Optional.ofNullable(authentication != null ? ((UserDetails) authentication.getPrincipal()).getUsername()
                : "unknown");
    }
}
