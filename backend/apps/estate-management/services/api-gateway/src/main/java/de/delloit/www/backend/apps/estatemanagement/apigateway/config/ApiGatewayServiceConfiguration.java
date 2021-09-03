package de.delloit.www.backend.apps.estatemanagement.apigateway.config;

import de.delloit.www.backend.apps.estatemanagement.apigateway.domain.authorization.AuthorizationServiceRoutes;
import lombok.AllArgsConstructor;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
@AllArgsConstructor
public class ApiGatewayServiceConfiguration {
    private AuthorizationServiceRoutes apiGatewayServiceRouters;

    @Bean
    public RouteLocator mainRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(apiGatewayServiceRouters.signUpRoute())
                .route(apiGatewayServiceRouters.signInRoute())
                .build();
    }

    @Bean
    public CorsWebFilter corsFilter() {
        return new CorsWebFilter(corsConfigurationSource());
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration().applyPermitDefaultValues();
        config.addAllowedMethod(HttpMethod.PUT);
        config.addAllowedMethod(HttpMethod.DELETE);
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
