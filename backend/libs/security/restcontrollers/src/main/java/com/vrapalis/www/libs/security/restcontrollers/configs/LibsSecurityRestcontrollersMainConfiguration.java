package com.vrapalis.www.libs.security.restcontrollers.configs;

import org.springframework.context.annotation.*;

/**
 * Swagger configuration library
 */
@Configuration
@PropertySource("classpath:restcontrollers.properties")
@ComponentScan(basePackages = "com.vrapalis.www.libs.documentation.swagger")
public class LibsSecurityRestcontrollersMainConfiguration {
}
