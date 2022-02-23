package com.vrapalis.www.backend.libs.shared.oauth2.server.config;

import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.key.Jwks;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.property.OAuth2ProviderSettingsProperties;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2CustomOAuth2UserServiceImp;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2CustomOidcUserServiceImp;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2AuthenticationSuccessHandler;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserServiceImpl;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.OAuth2UserApiUrl;
import lombok.AllArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.OAuth2AuthorizationServerConfiguration;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.oauth2.client.JdbcOAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.server.authorization.*;
import org.springframework.security.oauth2.server.authorization.client.JdbcRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ClientSettings;
import org.springframework.security.oauth2.server.authorization.config.ProviderSettings;
import org.springframework.security.oauth2.server.authorization.config.TokenSettings;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.time.Duration;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@AllArgsConstructor
@EnableJpaRepositories(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"})
@ComponentScan(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"},
        basePackageClasses = {},
        excludeFilters = {
                @ComponentScan.Filter(
                        type = FilterType.ASSIGNABLE_TYPE,
                        classes = OAuth2UserServiceImpl.class)
        }
)
@ConfigurationPropertiesScan(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*",
        "com.vrapalis.www.backend.libs.shared.oauth2.server.config.property"})
@EntityScan(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"})
public class OAuth2ServerConfiguration {
    private OAuth2CustomOidcUserServiceImp oidcUserService;
    private OAuth2CustomOAuth2UserServiceImp oauth2UserService;
    private OAuth2AuthenticationSuccessHandler auth2AuthenticationSuccessHandler;
    private OAuth2ProviderSettingsProperties providerSettingsProperties;

    @Bean
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public SecurityFilterChain authorizationServerSecurityFilterChain(HttpSecurity http) throws Exception {
        OAuth2AuthorizationServerConfiguration.applyDefaultSecurity(http);
        return http
                .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource()))
                .formLogin(withDefaults())
                .build();
    }

    // TODO LOGOUT CONFIGURATION/CLEAN
    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http, OAuth2AuthorizedClientService authorizedClientService) throws Exception {
        http
                .csrf().disable() // TODO SHOULD BE OPTIMIZED
                .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource()))
                .authorizeRequests(OAuth2ServerConfiguration::customizeAuthorizeRequest)
                .formLogin()
                .loginPage("/login").permitAll()
                .usernameParameter("email")
                .permitAll()
                .and()
                .oauth2Login().loginPage("/login").permitAll()
                .authorizedClientService(authorizedClientService)
                .userInfoEndpoint().oidcUserService(oidcUserService).userService(oauth2UserService)
                .and()
                .successHandler(auth2AuthenticationSuccessHandler)
                .and()
                .oauth2ResourceServer().jwt();
        return http.build();
    }

    private static void customizeAuthorizeRequest(ExpressionUrlAuthorizationConfigurer<HttpSecurity>
                                                          .ExpressionInterceptUrlRegistry authorizeRequests) {
        authorizeRequests
                .mvcMatchers("/webjars/**", "/files/**", "/public/**", "/static/**",
                        "/resources/**", "/css.css", "/js.js", "/*.js", "/*.css",OAuth2UserApiUrl.USER_REGISTRATION_URL,
                        OAuth2UserApiUrl.USER_FORGOT_PASSWORD_URL, OAuth2UserApiUrl.USER_RESET_PASSWORD_URL).permitAll()
                .mvcMatchers(OAuth2UserApiUrl.USER_BASE_URL + "/security-test").hasAuthority("SCOPE_read")
                .mvcMatchers(OAuth2UserApiUrl.USER_BASE_URL + OAuth2UserApiUrl.USER_REGISTRATION_URL,
                        OAuth2UserApiUrl.USER_BASE_URL + OAuth2UserApiUrl.USER_FORGOT_PASSWORD_URL,
                        OAuth2UserApiUrl.USER_BASE_URL + OAuth2UserApiUrl.USER_RESET_PASSWORD_URL).anonymous()
                .anyRequest().authenticated();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:4200");
        config.addAllowedOrigin("http://127.0.0.1:4200");
        config.addAllowedOrigin("http://vrapalis-oauth2.ddns.net");
        config.addAllowedOrigin("https://vrapalis-oauth2.ddns.net");
        config.addAllowedOrigin("https://vrapalis.ddns.net");
        config.addAllowedOrigin("http://vrapalis.ddns.net");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }

    // TODO EXTERNALIZE JDBC REPOSITORY
    @Bean
    public RegisteredClientRepository registeredClientRepository(JdbcOperations jdbcOperations) {
        RegisteredClient registeredClient = RegisteredClient.withId("client")
                .clientId("client")
                .clientSecret("secret")
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .redirectUri("http://127.0.0.1:4200")
                .redirectUri("http://127.0.0.1:4200/profile")
                .redirectUri("http://127.0.0.1:8080")
                .redirectUri("http://vrapalis-oauth2.ddns.net")
                .redirectUri("https://vrapalis-oauth2.ddns.net")
                .redirectUri("http://vrapalis.ddns.net")
                .redirectUri("https://vrapalis.ddns.net")
                .scope(OidcScopes.OPENID)
                .scope("read")
                .scope("write")
                .clientSettings(ClientSettings.builder().requireAuthorizationConsent(true).build())
                .tokenSettings(TokenSettings.builder().accessTokenTimeToLive(Duration.ofSeconds(30))
                        .refreshTokenTimeToLive(Duration.ofHours(6))
                        .reuseRefreshTokens(true)
                        .build())
                .build();

        final var jdbcRegisteredClientRepository = new JdbcRegisteredClientRepository(jdbcOperations);

        try {
            jdbcRegisteredClientRepository.save(registeredClient);
        } catch (Exception e) {

        }
        return jdbcRegisteredClientRepository;
    }

    @Bean
    public JWKSource<SecurityContext> jwkSource() {
        RSAKey rsaKey = Jwks.generateRsa();
        JWKSet jwkSet = new JWKSet(rsaKey);
        return (jwkSelector, securityContext) -> jwkSelector.select(jwkSet);
    }

    @Bean
    public ProviderSettings providerSettings() {
        var ps = ProviderSettings.builder();
        ps = ps.issuer(providerSettingsProperties.getIssuerUri());
        ps = ps.jwkSetEndpoint("/certs");
        return ps.build();
    }

    @Bean
    public JwtDecoder jwtDecoder(JWKSource<SecurityContext> jwkSource) {
        return OAuth2AuthorizationServerConfiguration.jwtDecoder(jwkSource);
    }

    @Bean
    public OAuth2AuthorizedClientService oAuth2AuthorizedClientService
            (JdbcOperations jdbcOperations, ClientRegistrationRepository clientRegistrationRepository) {
        return new JdbcOAuth2AuthorizedClientService(jdbcOperations, clientRegistrationRepository);
    }

    @Bean
    public OAuth2AuthorizationConsentService authorizationConsentService(JdbcTemplate jdbcTemplate,
                                                                         RegisteredClientRepository registeredClientRepository) {
        return new JdbcOAuth2AuthorizationConsentService(jdbcTemplate, registeredClientRepository);
    }

   /* @Bean
    public OAuth2AuthorizationService oAuth2AuthorizationService(JdbcOperations jdbcOperations, RegisteredClientRepository repository) {
        return new JdbcOAuth2AuthorizationService(jdbcOperations, repository);
    }*/
}
