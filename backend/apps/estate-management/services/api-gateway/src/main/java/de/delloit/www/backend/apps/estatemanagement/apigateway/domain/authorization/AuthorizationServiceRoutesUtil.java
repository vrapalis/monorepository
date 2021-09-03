package de.delloit.www.backend.apps.estatemanagement.apigateway.domain.authorization;

import lombok.experimental.UtilityClass;
import org.springframework.cloud.gateway.route.builder.GatewayFilterSpec;

@UtilityClass
public class AuthorizationServiceRoutesUtil {
    public static final String AUTHORIZATION_SERVICE = "lb://estate-management-authorization-service";

    public static void dedupeResponseHeaders(GatewayFilterSpec f) {
        f.dedupeResponseHeader("Access-Control-Allow-Origin", "RETAIN_FIRST");
        f.dedupeResponseHeader("Access-Control-Allow-Credentials", "RETAIN_FIRST");
    }
}
