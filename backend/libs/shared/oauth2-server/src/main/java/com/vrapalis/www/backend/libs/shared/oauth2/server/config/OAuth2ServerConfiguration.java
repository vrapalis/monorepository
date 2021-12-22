package com.vrapalis.www.backend.libs.shared.oauth2.server.config;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.filter.OAuth2RegistrationCodeFilter;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.key.Jwks;
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
import org.springframework.jdbc.core.SqlParameterValue;
import org.springframework.jdbc.support.lob.DefaultLobHandler;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.OAuth2AuthorizationServerConfiguration;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.jackson2.CoreJackson2Module;
import org.springframework.security.oauth2.client.JdbcOAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.server.authorization.*;
import org.springframework.security.oauth2.server.authorization.client.InMemoryRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.JdbcRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ProviderSettings;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.sql.Timestamp;
import java.sql.Types;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@AllArgsConstructor
@EnableJpaRepositories(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"})
@ComponentScan(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"},
        basePackageClasses = {OAuth2RegistrationCodeFilter.class},
        excludeFilters = {
                @ComponentScan.Filter(
                        type = FilterType.ASSIGNABLE_TYPE,
                        classes = OAuth2UserServiceImpl.class)
        }
)
@ConfigurationPropertiesScan(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"})
@EntityScan(basePackages = {"com.vrapalis.www.backend.libs.shared.oauth2.server.domain.*"})
public class OAuth2ServerConfiguration {

    private OAuth2CustomOidcUserServiceImp oidcUserService;
    private OAuth2CustomOAuth2UserServiceImp oauth2UserService;
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
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http, OAuth2AuthorizedClientService authorizedClientService) throws Exception {
        http
                .csrf().disable() // TODO SHOULD BE OPTIMIZED
                .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource()))
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
                .authorizeRequests(OAuth2ServerConfiguration::customizeAuthorizeRequest)
                .formLogin()
                .loginPage("/login")
//                .successHandler(auth2AuthenticationSuccessHandler)
                .usernameParameter("email")
                .permitAll()
                .and()
                .oauth2Login().loginPage("/login")
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
        try {
            authorizeRequests
                    .mvcMatchers(OAuth2UserApiUrl.USER_BASE_URL + OAuth2UserApiUrl.USER_REGISTRATION_URL).anonymous()
                    .mvcMatchers(OAuth2UserApiUrl.USER_BASE_URL + "/security-test").hasAuthority("SCOPE_read")
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
        config.addAllowedOrigin("http://vrapalis-oauth2.ddns.net");
        config.addAllowedOrigin("https://vrapalis-oauth2.ddns.net");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }

    @Bean
    public RegisteredClientRepository registeredClientRepository(JdbcOperations jdbcOperations) {
        RegisteredClient registeredClient = RegisteredClient.withId("client")
                .clientId("client")
                .clientSecret("secret")
                .clientAuthenticationMethod(ClientAuthenticationMethod.BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .redirectUri("http://127.0.0.1:4200")
                .redirectUri("http://vrapalis-oauth2.ddns.net")
                .redirectUri("https://vrapalis-oauth2.ddns.net")
                .scope(OidcScopes.OPENID)
                .scope("read")
                .scope("write")
                .clientSettings(clientSettings -> clientSettings.requireUserConsent(true))
                .tokenSettings(tokenSettings -> {
                    // accessToken  The validity of the
                    tokenSettings.accessTokenTimeToLive(Duration.ofHours(1));
                    // refreshToken  The validity of the
                    tokenSettings.refreshTokenTimeToLive(Duration.ofDays(3));
                    //  Whether the refresh token can be reused
                    tokenSettings.reuseRefreshTokens(true);
                })
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
        var ps = new ProviderSettings();
//        ps = ps.issuer("http://127.0.0.1:8080");
        ps = ps.issuer("https://vrapalis-oauth2.ddns.net");
        ps = ps.jwkSetEndpoint("/certs");
        return ps;
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
}
