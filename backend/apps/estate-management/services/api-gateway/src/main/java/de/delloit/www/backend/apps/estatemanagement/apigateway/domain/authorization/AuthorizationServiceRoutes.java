package de.delloit.www.backend.apps.estatemanagement.apigateway.domain.authorization;

import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.function.Function;

import static de.delloit.www.backend.apps.estatemanagement.apigateway.domain.authorization.AuthorizationServiceRoutesUtil.AUTHORIZATION_SERVICE;

@Component
public class AuthorizationServiceRoutes {

    public Function<PredicateSpec, Buildable<Route>> signInRoute() {
        return signInRoute -> signInRoute
                .method(HttpMethod.POST)
                .and()
                .path("/sign-in")
                .filters(f -> {
                    AuthorizationServiceRoutesUtil.dedupeResponseHeaders(f);
                    return f.rewritePath("/sign-in", "/api/users/sign-in");
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
