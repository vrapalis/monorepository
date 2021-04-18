package com.vrapalis.www.entryou.apigateway.config;

import com.vrapalis.www.entryou.apigateway.config.routers.UaaServiceRouter;
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
public class MainRouter {
    UaaServiceRouter uaaServiceRouter = new UaaServiceRouter();

    @Bean
    public RouteLocator mainRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(uaaServiceRouter.signInRoute())
                .route(uaaServiceRouter.signUpRoute())
                .route(uaaServiceRouter.signUpConfirmRoute())
                .route(uaaServiceRouter.resetPasswordRoute())
                .route(uaaServiceRouter.resetPasswordConfirmRoute())
                .route(uaaServiceRouter.userInfoRoute())
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
