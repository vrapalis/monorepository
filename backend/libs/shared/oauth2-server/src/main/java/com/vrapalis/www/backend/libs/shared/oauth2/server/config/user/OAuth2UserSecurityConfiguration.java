package com.vrapalis.www.backend.libs.shared.oauth2.server.config.user;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.UserRepository;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.UserService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@AllArgsConstructor
public class OAuth2UserSecurityConfiguration {

    private UserRepository userRepository;

    @Bean
    public UserService userDetailsService() {
        return new UserServiceImpl(userRepository);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
