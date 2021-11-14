package com.vrapalis.www.backend.libs.shared.oauth2.server.config.token;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.OAuth2TokenType;
import org.springframework.security.oauth2.server.authorization.JwtEncodingContext;
import org.springframework.security.oauth2.server.authorization.OAuth2TokenCustomizer;

import java.util.stream.Collectors;

@Configuration
public class OAuth2TokenCustomizerConfiguration {

    @Bean
    public OAuth2TokenCustomizer<JwtEncodingContext> buildCustomizer() {
        OAuth2TokenCustomizer<JwtEncodingContext> customizer = (context) -> {
            final var authentication = SecurityContextHolder.getContext().getAuthentication();
            System.out.println("TOKENCLASS:     " + authentication.getClass());

            context.getClaims().claim("id", "have to be configured");
//            if(authentication instanceof UsernamePasswordAuthenticationToken) {
//                if (authentication.isAuthenticated() && OAuth2TokenType.ACCESS_TOKEN.equals(context.getTokenType())) {
//                    context.getClaims().claim("authorities", authentication.getAuthorities()
//                            .stream()
//                            .map(GrantedAuthority::getAuthority)
//                            .collect(Collectors.toList()));
//                }
//            }

        };
        return customizer;
    }

}
