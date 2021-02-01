package com.vrapalis.www.libs.push.services.configs;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan(basePackages = "com.vrapalis.www.libs.push.entities.domains.*")
@EnableJpaRepositories(basePackages = "com.vrapalis.www.libs.push.repositories.domains.*")
@ComponentScan(basePackages = {
        "com.vrapalis.www.libs.push.services.domains.*"
})
public class LibsPushServicesMainConfiguration {
}

