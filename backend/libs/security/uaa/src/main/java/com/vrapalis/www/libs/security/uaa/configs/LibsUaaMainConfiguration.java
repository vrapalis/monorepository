package com.vrapalis.www.libs.security.uaa.configs;

import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserEntityRepository;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ConditionalOnClass({LibsSecurityJpaUserEntity.class, LibsSecurityJpaUserEntityRepository.class})
@EntityScan(basePackages = "com.vrapalis.www.libs.security.entities.domains.*")
@EnableJpaRepositories(basePackages = "com.vrapalis.www.libs.security.repositories.domains.*")
@ComponentScan(
        basePackages = {
                "com.vrapalis.www.libs.security.uaa.*",
                "com.vrapalis.www.libs.security.services.*",
                "com.vrapalis.www.libs.security.restcontrollers.*",
                "com.vrapalis.www.libs.security.mappers.*",
        }
)
public class LibsUaaMainConfiguration {
}
