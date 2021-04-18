package com.vrapalis.www.entryou.apigateway.config.routers;

import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.GatewayFilterSpec;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;
import org.springframework.http.HttpMethod;

import java.util.function.Function;

public class UaaServiceRouter {
    final String UAA_SERVICE_NAME = "lb://entryou-uaa";

    public Function<PredicateSpec, Buildable<Route>> signInRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.POST)
                .and()
                .path("/sign-in")
                .filters(f -> {
                    dedupeResponseHeaders(f);
                    return f.rewritePath("/sign-in", "/api/users/sign-in");
                })
                .uri(UAA_SERVICE_NAME);
    }

    public Function<PredicateSpec, Buildable<Route>> signUpRoute() {
        return signUpRoute -> signUpRoute
                .method(HttpMethod.POST)
                .and()
                .path("/sign-up")
                .filters(f -> {
                    dedupeResponseHeaders(f);
                    return f.rewritePath("/sign-up", "/api/users/sign-up");
                })
                .uri(UAA_SERVICE_NAME);
    }

    public Function<PredicateSpec, Buildable<Route>> signUpConfirmRoute() {
        return signUpConfirmRoute -> signUpConfirmRoute
                .method(HttpMethod.GET)
                .and()
                .path("/sign-up-confirm")
                .filters(f -> {
                    dedupeResponseHeaders(f);
                    return f.rewritePath("/sign-up-confirm", "/api/users/sign-up-confirm");
                })
                .uri(UAA_SERVICE_NAME);
    }

    public Function<PredicateSpec, Buildable<Route>> resetPasswordRoute() {
        return resetPasswordRoute -> resetPasswordRoute
                .method(HttpMethod.POST)
                .and()
                .path("/reset-password")
                .filters(f -> {
                    dedupeResponseHeaders(f);
                    return f.rewritePath("/reset-password", "/api/users/reset-password");
                })
                .uri(UAA_SERVICE_NAME);
    }

    public Function<PredicateSpec, Buildable<Route>> resetPasswordConfirmRoute() {
        return resetPasswordConfirmRoute -> resetPasswordConfirmRoute
                .method(HttpMethod.PUT)
                .and()
                .path("/reset-password/confirm")
                .filters(f -> {
                    dedupeResponseHeaders(f);
                    return f.rewritePath("/reset-password/confirm", "/api/users/reset-password/confirm");
                })
                .uri(UAA_SERVICE_NAME);
    }

    public Function<PredicateSpec, Buildable<Route>> userInfoRoute() {
        return userInfoRoute -> userInfoRoute
                .method(HttpMethod.GET)
                .and()
                .path("/users/info")
                .filters(f -> {
                    dedupeResponseHeaders(f);
                    return f.rewritePath("/users/info/(?<segment>.*)", "/api/users/info/${segment}");
                })
                .uri(UAA_SERVICE_NAME);
    }

    private void dedupeResponseHeaders(GatewayFilterSpec f) {
        f.dedupeResponseHeader("Access-Control-Allow-Origin", "RETAIN_FIRST");
        f.dedupeResponseHeader("Access-Control-Allow-Credentials", "RETAIN_FIRST");
    }
}
