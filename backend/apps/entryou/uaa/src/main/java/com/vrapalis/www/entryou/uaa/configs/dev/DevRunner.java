package com.vrapalis.www.entryou.uaa.configs.dev;

import com.vrapalis.www.libs.security.entities.domains.account.LibsSecurityJpaAccountEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserEntityRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@AllArgsConstructor
@Profile({"dev", "dev-local"})
public class DevRunner {
    private LibsSecurityJpaUserEntityRepository userEntityRepository;

    @Bean
    public CommandLineRunner commandLineRunner() {
        return args -> {
            final var userEntity = new LibsSecurityJpaUserEntity();
            userEntity.setEmail("admin@admin.com");
            LibsSecurityJpaAccountEntity account = new LibsSecurityJpaAccountEntity();
            account.setPassword(new BCryptPasswordEncoder().encode("123456"));
                    account.setAccountNonExpired(true);
                    account.setAccountNonLocked(true);
                    account.setAccountNonLocked(true);
                    account.setCredentialsNonExpired(true);
                    account.setIsEnabled(true);
            account.setUser(userEntity);
            userEntity.setAccount(account);
            userEntityRepository.saveAndFlush(userEntity);
        };
    }
}
