package com.vrapalis.www.entryou.apigateway.config.routers;

import lombok.experimental.UtilityClass;
import org.springframework.cloud.gateway.route.builder.GatewayFilterSpec;

@UtilityClass
public class RouterUtility {

    public void dedupeResponseHeaders(GatewayFilterSpec f) {
        f.dedupeResponseHeader("Access-Control-Allow-Origin", "RETAIN_FIRST");
        f.dedupeResponseHeader("Access-Control-Allow-Credentials", "RETAIN_FIRST");
    }
}
