package com.vrapalis.www.entryou.uaa.configs.dev;

import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@AllArgsConstructor
@Profile({"dev", "dev-local"})
public class DevRunner {

    @Bean
    public CommandLineRunner commandLineRunner() {
        return args -> {
        };
    }
}
