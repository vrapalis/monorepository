package com.vrapalis.www.libs.web.properties.config;

import com.vrapalis.www.libs.web.properties.domain.cors.LibsWebCorsProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties({LibsWebCorsProperties.class})
public class LibsWebPropertiesMainConfiguration {
}
