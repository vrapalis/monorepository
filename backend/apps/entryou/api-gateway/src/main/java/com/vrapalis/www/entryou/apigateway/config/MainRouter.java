package com.vrapalis.www.entryou.apigateway.config;

import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

import java.util.function.Function;

@Configuration
public class MainRouter {

    @Bean
    public RouteLocator myRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(createMainRoutes())
                .build();
    }

    private Function<PredicateSpec, Buildable<Route>> createMainRoutes() {
        return signInRoute -> signInRoute
                .method(HttpMethod.POST)
                .and()
                .path("/sign-in")
                .filters(f -> f.rewritePath("/sign-in", "/api/users/sign-in"))
//                .uri("http://localhost:8081");
                .uri("lb://entryou-uaa");
    }
}
