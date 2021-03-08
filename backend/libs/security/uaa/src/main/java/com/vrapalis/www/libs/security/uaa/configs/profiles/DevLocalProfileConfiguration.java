package com.vrapalis.www.libs.security.uaa.configs.profiles;

import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("dev-local")
@AllArgsConstructor
public class DevLocalProfileConfiguration {

    @Bean("SecurityDevLocalCommandLineRunner")
    public CommandLineRunner commandLineRunner() {
        return args -> {
        };
    }
}
