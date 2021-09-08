package de.delloit.www.backend.libs.shared.security.domain.jwt;

import de.delloit.www.backend.libs.shared.security.domain.jwt.error.SharedSecurityGenerateTokenError;
import de.delloit.www.backend.libs.shared.security.domain.jwt.service.SharedSecurityJwtServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

@DisplayName("JwtService test group")
public class SharedSecurityJwtServiceTest {


    @Test
    @DisplayName("Generate jwt token test")
    void generateJwtTokenTest() throws SharedSecurityGenerateTokenError {
        // Given
        final var sharedSecurityJwtService = new SharedSecurityJwtServiceImpl();
        final var user = User.builder()
                .username("user")
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .disabled(false)
                .password("")
                .authorities(new SimpleGrantedAuthority("pushEmail"))
                .build();

        // When
        final var token = sharedSecurityJwtService.generateToken(user, "delloit-authentication-service");

        // Then
        Assertions.assertThat(token).isNotEmpty();
    }
}
