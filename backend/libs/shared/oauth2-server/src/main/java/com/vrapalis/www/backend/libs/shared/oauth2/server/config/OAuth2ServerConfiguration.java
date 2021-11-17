package com.vrapalis.www.backend.libs.shared.oauth2.server.config;

import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.key.Jwks;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.CustomOAuth2UserServiceImp;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2AuthenticationSuccessHandler;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.UserServiceImpl;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.UserApiUrl;
import lombok.AllArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.OAuth2AuthorizationServerConfiguration;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.server.authorization.client.InMemoryRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ProviderSettings;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableJpaRepositories(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"})
@ComponentScan(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"},
        excludeFilters = {
                @ComponentScan.Filter(
                        type = FilterType.ASSIGNABLE_TYPE,
                        classes = UserServiceImpl.class)
        }
)
@EntityScan(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"})
@AllArgsConstructor
public class OAuth2ServerConfiguration {

    private CustomOAuth2UserServiceImp oauth2UserService;
    private OAuth2AuthenticationSuccessHandler auth2AuthenticationSuccessHandler;

    @Bean
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public SecurityFilterChain authorizationServerSecurityFilterChain(HttpSecurity http) throws Exception {
        OAuth2AuthorizationServerConfiguration.applyDefaultSecurity(http);
        return http
                .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource()))
                .formLogin(withDefaults()).build();
    }

    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // TODO SHOULD BE OPTIMIZED
                .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource()))
                .authorizeRequests(OAuth2ServerConfiguration::customizeAuthorizeRequest)
                .formLogin()
                .loginPage("/login")
                .usernameParameter("email")
                .permitAll()
                .and()
                .oauth2Login().loginPage("/login")
                .userInfoEndpoint().userService(oauth2UserService)
                .and()
                .successHandler(auth2AuthenticationSuccessHandler)
                .and()
                .oauth2ResourceServer().jwt();
        return http.build();
    }

    private static void customizeAuthorizeRequest(ExpressionUrlAuthorizationConfigurer<HttpSecurity>
                                                          .ExpressionInterceptUrlRegistry authorizeRequests) {
        try {
            authorizeRequests
                    .mvcMatchers(UserApiUrl.USER_BASE_URL + UserApiUrl.USER_REGISTRATION_URL).anonymous()
                    .mvcMatchers(UserApiUrl.USER_BASE_URL + "/security-test").hasAuthority("SCOPE_read")
                    .mvcMatchers("/webjars/**").permitAll()
                    .anyRequest().permitAll();
        } catch (Exception ex) {
        }
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:4200");
        config.addAllowedOrigin("http://127.0.0.1:4200");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }

    @Bean
    public RegisteredClientRepository registeredClientRepository() {
        RegisteredClient registeredClient = RegisteredClient.withId("client")
                .clientId("client")
                .clientSecret("secret")
                .clientAuthenticationMethod(ClientAuthenticationMethod.BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .redirectUri("http://127.0.0.1:4200")
                .scope(OidcScopes.OPENID)
                .scope("read")
                .scope("write")
                .clientSettings(clientSettings -> clientSettings.requireUserConsent(true))
                .build();

        return new InMemoryRegisteredClientRepository(registeredClient);
    }

    @Bean
    public JWKSource<SecurityContext> jwkSource() {
        RSAKey rsaKey = Jwks.generateRsa();
        JWKSet jwkSet = new JWKSet(rsaKey);
        return (jwkSelector, securityContext) -> jwkSelector.select(jwkSet);
    }

    @Bean
    public ProviderSettings providerSettings() {
        var ps = new ProviderSettings();
        ps = ps.issuer("http://127.0.0.1:8080");
        ps = ps.jwkSetEndpoint("/certs");
        return ps;
    }

    @Bean
    public JwtDecoder jwtDecoder(JWKSource<SecurityContext> jwkSource) {
        return OAuth2AuthorizationServerConfiguration.jwtDecoder(jwkSource);
    }
}
