package com.example.security.domain.user.service;

import com.example.security.domain.user.entity.UserEntity;
import com.example.security.domain.user.repository.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;


@ExtendWith(MockitoExtension.class)
@DisplayName("User services junit group test")
public class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    @DisplayName("User save should return http status 200")
    void saveTest() {
        // Given
        var user = new UserEntity();

        // When
        Mockito.when(userRepository.saveAndFlush(Mockito.any())).thenReturn(user);

        // Then
        Assertions.assertThat(userService.save(user).getStatusCode()).isEqualByComparingTo(HttpStatus.OK);
    }
}
