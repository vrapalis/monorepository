package com.delloit.www.backend.apps.apigateway.domain.routers;

import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class ApiGatewayServiceRouters {

    public Function<PredicateSpec, Buildable<Route>> signInRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.POST)
                .and()
                .path("/sign-in")
                .filters(f -> {
                    ApiGatewayServiceRouterUtil.dedupeResponseHeaders(f);
                    return f.rewritePath("/sign-in", "/api/users/sign-in");
                })
                .uri("http://localhost:8081");
    }
}
