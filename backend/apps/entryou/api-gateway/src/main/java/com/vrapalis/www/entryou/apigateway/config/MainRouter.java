package com.vrapalis.www.entryou.apigateway.config;

import com.vrapalis.www.entryou.apigateway.config.routers.EntryServiceRouter;
import com.vrapalis.www.entryou.apigateway.config.routers.UaaServiceRouter;
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
public class MainRouter {
    UaaServiceRouter uaaServiceRouter;
    EntryServiceRouter entryServiceRouter;

    @Bean
    public RouteLocator mainRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(uaaServiceRouter.signInRoute())
                .route(uaaServiceRouter.signUpRoute())
                .route(uaaServiceRouter.signUpConfirmRoute())
                .route(uaaServiceRouter.resetPasswordRoute())
                .route(uaaServiceRouter.resetPasswordConfirmRoute())
                .route(uaaServiceRouter.userInfoRoute())
                .route(entryServiceRouter.checkInRoute())
                .route(entryServiceRouter.checkinsByGuestIdRoute())
                .route(entryServiceRouter.checkOutRoute())
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
