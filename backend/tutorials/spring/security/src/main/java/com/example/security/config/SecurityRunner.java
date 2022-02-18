package com.example.security.config;

import com.example.security.domain.user.entity.UserEntity;
import com.example.security.domain.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class SecurityRunner implements CommandLineRunner {
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        userRepository.saveAndFlush(UserEntity.builder().name("Mike").build());
    }
}
