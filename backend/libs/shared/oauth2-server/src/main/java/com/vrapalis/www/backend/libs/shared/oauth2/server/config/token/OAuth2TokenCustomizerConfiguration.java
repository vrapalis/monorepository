package com.vrapalis.www.backend.libs.shared.oauth2.server.config.token;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserRoleEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.OAuth2UserDetailsModel;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.OAuth2UserModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.OAuth2TokenType;
import org.springframework.security.oauth2.server.authorization.JwtEncodingContext;
import org.springframework.security.oauth2.server.authorization.OAuth2TokenCustomizer;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@Configuration
public class OAuth2TokenCustomizerConfiguration {

    @Bean
    public OAuth2TokenCustomizer<JwtEncodingContext> buildCustomizer() {
        OAuth2TokenCustomizer<JwtEncodingContext> customizer = (context) -> {
            final var principal = context.getPrincipal().getPrincipal();
            if (context.getPrincipal().isAuthenticated()) {
                if (OAuth2TokenType.ACCESS_TOKEN.equals(context.getTokenType())) {
                    if (principal instanceof OAuth2UserModel) {
                        final var roleEntities = ((OAuth2UserModel) principal).getUserEntity().getRoles();
                        if (roleEntities != null) {
                            final var roles = roleEntities
                                    .stream()
                                    .map(role -> role.getName())
                                    .map(roleName -> new SimpleGrantedAuthority(roleName))
                                    .collect(Collectors.toList());
                            context.getClaims().claim("roles", roles);
                        } else {
                            context.getClaims().claim("roles", Arrays.asList());
                        }
                    } else if (principal instanceof OAuth2UserDetailsModel) {
                        final var roles = ((OAuth2UserDetailsModel) principal).getAuthorities().stream().collect(Collectors.toList());
                        if (roles != null) {
                            context.getClaims().claim("roles", roles);
                        } else {
                            context.getClaims().claim("roles", Arrays.asList());
                        }
                    }
                }
                if (context.getTokenType().getValue().equals("id_token")) {
                    if (principal instanceof OAuth2UserModel) {
                        context.getClaims().claim("email", ((OAuth2UserModel) principal).getEmail());
                        context.getClaims().claim("picture", ((OAuth2UserModel) principal).getPicture());
                        context.getClaims().claim("first_name", ((OAuth2UserModel) principal).getGivenName());
                        context.getClaims().claim("last_name", ((OAuth2UserModel) principal).getFamilyName());
                    } else if (principal instanceof OAuth2UserDetailsModel) {
                        context.getClaims().claim("email", ((OAuth2UserDetailsModel) principal).getUserEntity().getEmail());
                        context.getClaims().claim("picture", "");
                        context.getClaims().claim("first_name", ((OAuth2UserDetailsModel) principal)
                                .getUserEntity().getInfo().getFirstName() != null ? ((OAuth2UserDetailsModel) principal)
                                .getUserEntity().getInfo().getFirstName() : "");
                        context.getClaims().claim("last_name", ((OAuth2UserDetailsModel) principal).getUserEntity()
                                .getInfo().getLastName() != null ? ((OAuth2UserDetailsModel) principal).getUserEntity()
                                .getInfo().getLastName() : "");
                    }
                }
            }
        };
        return customizer;
    }

}
