package com.vrapalis.www.entryou.apigateway.config.routers;

import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class EntryServiceRouter {
    private final String ENTRY_SERVICE_NAME = "lb://entryou-entry";

    public Function<PredicateSpec, Buildable<Route>> checkInRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.POST)
                .and()
                .path("/check-ins")
                .filters(f -> {
                    RouterUtility.dedupeResponseHeaders(f);
                    return f.rewritePath("/check-ins", "/api/check-ins");
                })
                .uri(ENTRY_SERVICE_NAME);
    }

    public Function<PredicateSpec, Buildable<Route>> checkinsByGuestIdRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.GET)
                .and()
                .path("/check-ins/guests/**")
                .filters(f -> {
                    RouterUtility.dedupeResponseHeaders(f);
                    return f.rewritePath("/check-ins/guests/(?<segment>.*)", "/api/check-ins/guests/${segment}");
                })
                .uri(ENTRY_SERVICE_NAME);
    }

    public Function<PredicateSpec, Buildable<Route>> checkOutRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.PUT)
                .and()
                .path("/check-outs")
                .filters(f -> {
                    RouterUtility.dedupeResponseHeaders(f);
                    return f.rewritePath("/check-outs", "/api/check-outs");
                })
                .uri(ENTRY_SERVICE_NAME);
    }
}
