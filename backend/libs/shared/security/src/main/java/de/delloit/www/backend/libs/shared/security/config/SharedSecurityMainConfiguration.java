package de.delloit.www.backend.libs.shared.security.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "de.delloit.www.backend.libs.shared.security.domain.*")
public class SharedSecurityMainConfiguration {
}
