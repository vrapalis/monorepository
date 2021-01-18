package com.vrapalis.www.libs.security.uaa.configs;

import com.vrapalis.www.libs.security.jpa.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.jpa.domains.user.LibsSecurityJpaUserEntityRepository;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ConditionalOnClass({LibsSecurityJpaUserEntity.class, LibsSecurityJpaUserEntityRepository.class})
@EntityScan(basePackages = "com.vrapalis.www.libs.security.jpa.*")
@EnableJpaRepositories(basePackages = "com.vrapalis.www.libs.security.jpa.*")
@ComponentScan(
        basePackages = {
                "com.vrapalis.www.libs.security.*",
                "com.vrapalis.www.libs.documentation.swagger"
        }
)
public class LibsUaaMainConfiguration {
}
