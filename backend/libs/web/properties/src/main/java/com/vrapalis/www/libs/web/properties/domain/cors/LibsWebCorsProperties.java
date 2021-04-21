package com.vrapalis.www.libs.web.properties.domain.cors;

import lombok.Builder;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@Builder
@Component
@ConfigurationProperties(prefix = "com.vrapalis.www.libs.web.properties.cors")
public class LibsWebCorsProperties {
    private List<String> allowedOrigins;
}
