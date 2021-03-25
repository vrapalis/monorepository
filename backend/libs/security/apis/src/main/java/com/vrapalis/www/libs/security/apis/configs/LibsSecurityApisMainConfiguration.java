package com.vrapalis.www.libs.security.apis.configs;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.vrapalis.www.libs.security.apis.domains.*")
public class LibsSecurityApisMainConfiguration {
}
