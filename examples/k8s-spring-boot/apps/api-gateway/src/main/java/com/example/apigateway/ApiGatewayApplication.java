package com.example.apigateway;

import lombok.AllArgsConstructor;
import lombok.experimental.UtilityClass;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.GatewayFilterSpec;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.function.Function;

import static com.example.apigateway.AuthorizationServiceRoutesUtil.AUTHORIZATION_SERVICE;

@SpringBootApplication
@EnableDiscoveryClient
@AllArgsConstructor
public class ApiGatewayApplication {

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

    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }

}

@Component
class AuthorizationServiceRoutes {

    public Function<PredicateSpec, Buildable<Route>> signInRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.GET)
                .and()
                .path("/call")
                .filters(f -> {
                    AuthorizationServiceRoutesUtil.dedupeResponseHeaders(f);
                    return f.rewritePath("/call", "/api/user-call");
                })
                .uri(AUTHORIZATION_SERVICE);
    }

    public Function<PredicateSpec, Buildable<Route>> signUpRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.POST)
                .and()
                .path("/sign-up")
                .filters(f -> {
                    AuthorizationServiceRoutesUtil.dedupeResponseHeaders(f);
                    return f.rewritePath("/sign-up", "/api/users/sign-up");
                })
                .uri(AUTHORIZATION_SERVICE);
    }
}

@UtilityClass
class AuthorizationServiceRoutesUtil {
    public static final String AUTHORIZATION_SERVICE = "lb://auth-service";

    public static void dedupeResponseHeaders(GatewayFilterSpec f) {
        f.dedupeResponseHeader("Access-Control-Allow-Origin", "RETAIN_FIRST");
        f.dedupeResponseHeader("Access-Control-Allow-Credentials", "RETAIN_FIRST");
    }
}
