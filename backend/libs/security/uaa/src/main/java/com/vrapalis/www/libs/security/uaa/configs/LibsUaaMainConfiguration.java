package com.vrapalis.www.libs.security.uaa.configs;

import com.vrapalis.www.libs.security.entities.domains.account.LibsSecurityJpaAccountEntity;
import com.vrapalis.www.libs.security.entities.domains.authority.LibsSecurityJpaAuthorityEntity;
import com.vrapalis.www.libs.security.entities.domains.role.LibsSecurityJpaRoleEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserInfoEntity;
import com.vrapalis.www.libs.security.entities.domains.organization.LibsSecurityJpaUserOrganizationType;
import com.vrapalis.www.libs.security.repositories.domains.organization.LibsSecurityJpaOrganizationTypeRepository;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserEntityRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Arrays;
import java.util.Collections;
import java.util.Set;

@Configuration
@ConditionalOnClass({LibsSecurityJpaUserEntity.class, LibsSecurityJpaUserEntityRepository.class})
@EntityScan(basePackages = "com.vrapalis.www.libs.security.entities.domains.*")
@EnableJpaRepositories(basePackages = "com.vrapalis.www.libs.security.repositories.domains.*")
@ComponentScan(
        basePackages = {
                "com.vrapalis.www.libs.security.uaa.*",
                "com.vrapalis.www.libs.security.repositories.configs",
                "com.vrapalis.www.libs.security.services.*",
                "com.vrapalis.www.libs.security.restcontrollers.*",
                "com.vrapalis.www.libs.security.mappers.*",
        }
)
@AllArgsConstructor
public class LibsUaaMainConfiguration {
    private LibsSecurityJpaUserEntityRepository userEntityRepository;
    private LibsSecurityJpaOrganizationTypeRepository organizationTypeRepository;

    @Bean(name = "SecurityCommandLineRunner")
    public CommandLineRunner commandLineRunner() {
        return args -> {
            persistOrganization();
            var defaultUser = user();
            userEntityRepository.save(defaultUser);
        };
    }

    private void persistOrganization() {
        var privateOrganization = LibsSecurityJpaUserOrganizationType.builder()
                .name("private")
                .description("Private")
                .build();
        var organization = LibsSecurityJpaUserOrganizationType.builder()
                .name("organization")
                .description("Organization")
                .build();
        organizationTypeRepository.saveAll(Arrays.asList(privateOrganization, organization));
    }

    private LibsSecurityJpaUserEntity user() {
        final LibsSecurityJpaUserEntity user = LibsSecurityJpaUserEntity.builder()
                .email("admin@admin.com")
                .build();

        final var info = info();
        info.setUser(user);
        user.setInfo(info);

        final var account = account();
        account.setUser(user);
        user.setAccount(account);

        final var authorities = authorities();

        final var roles = roles();
        roles.stream().forEach(role -> role.setAuthorities(authorities));
        user.setRoles(roles);

        return user;
    }

    private LibsSecurityJpaUserInfoEntity info() {
        return LibsSecurityJpaUserInfoEntity.builder()
                .firstName("Admin")
                .surname("Default")
                .age(33)
                .organizationType(organizationType())
                .build();
    }

    private LibsSecurityJpaUserOrganizationType organizationType() {
        return organizationTypeRepository.findByName("private").orElseThrow();
    }

    private LibsSecurityJpaAccountEntity account() {
        return LibsSecurityJpaAccountEntity.builder()
                .accountNonLocked(true)
                .accountNonExpired(true)
                .isEnabled(true)
                .credentialsNonExpired(true)
                .password(new BCryptPasswordEncoder().encode("123456"))
                .build();
    }

    private Set<LibsSecurityJpaRoleEntity> roles() {
        return Collections.singleton(LibsSecurityJpaRoleEntity.builder()
                .name("super_admin")
                .description("Super admin role")
                .authorities(authorities())
                .build());
    }

    private Set<LibsSecurityJpaAuthorityEntity> authorities() {
        return Collections.singleton(LibsSecurityJpaAuthorityEntity.builder()
                .name("everything")
                .description("Can do everything")
                .build());
    }
}

