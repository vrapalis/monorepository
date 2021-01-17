package com.vrapalis.www.entryou.uaa.configs.dev;

import com.vrapalis.www.libs.security.jpa.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.jpa.domains.user.LibsSecurityJpaUserEntityRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@AllArgsConstructor
@Profile({"dev", "dev-local"})
public class DevRunner {
    private LibsSecurityJpaUserEntityRepository userEntityRepository;

    @Bean
    public CommandLineRunner commandLineRunner() {
        return args -> {
            final var userEntity = new LibsSecurityJpaUserEntity();
            userEntity.setEmail("max@max.com");
            userEntityRepository.saveAndFlush(userEntity);
        };
    }
}
