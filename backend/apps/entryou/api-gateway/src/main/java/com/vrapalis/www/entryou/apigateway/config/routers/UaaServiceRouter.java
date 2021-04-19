package com.vrapalis.www.entryou.apigateway.config.routers;

import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class UaaServiceRouter {
    final String UAA_SERVICE_NAME = "lb://entryou-uaa";

    public Function<PredicateSpec, Buildable<Route>> signInRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.POST)
                .and()
                .path("/sign-in")
                .filters(f -> {
                    RouterUtility.dedupeResponseHeaders(f);
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
                    RouterUtility.dedupeResponseHeaders(f);
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
                    RouterUtility.dedupeResponseHeaders(f);
                    return f.rewritePath("/sign-up-confirm", "/api/users/sign-up");
                })
                .uri(UAA_SERVICE_NAME);
    }

    public Function<PredicateSpec, Buildable<Route>> resetPasswordRoute() {
        return resetPasswordRoute -> resetPasswordRoute
                .method(HttpMethod.POST)
                .and()
                .path("/reset-password")
                .filters(f -> {
                    RouterUtility.dedupeResponseHeaders(f);
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
                    RouterUtility.dedupeResponseHeaders(f);
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
                    RouterUtility.dedupeResponseHeaders(f);
                    return f.rewritePath("/users/info/(?<segment>.*)", "/api/users/info/${segment}");
                })
                .uri(UAA_SERVICE_NAME);
    }
}
