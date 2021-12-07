package com.vrapalis.www.backend.libs.shared.oauth2.server.config.user;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props.OAuth2RegistrationPropertiesTemplate;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.service.OAuth2EmailService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.OAuth2UserRepository;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserRegistrationCodeService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@AllArgsConstructor
public class OAuth2UserSecurityConfiguration {
    private OAuth2UserRepository userRepository;
    private OAuth2UserRegistrationCodeService codeService;
    private OAuth2EmailService emailService;
    private OAuth2RegistrationPropertiesTemplate registrationPropertiesTemplate;

    @Bean
    public OAuth2UserService userDetailsService() {
        return new OAuth2UserServiceImpl(emailService,userRepository, codeService, registrationPropertiesTemplate);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
