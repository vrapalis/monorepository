package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user;

import com.vrapalis.www.backend.libs.shared.oauth2.server.config.RestControllerTestConfiguration;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.UserRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.UserApiUrl;
import de.delloit.www.backend.libs.shared.dto.domain.server.ErrorServerResponseDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithAnonymousUser;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DisplayName("User rest controller group test")
public class UserRestControllerTest extends RestControllerTestConfiguration {
    private UserRegistrationDto givenUserRegistrationDto;

    @BeforeEach
    void setUp() {
        givenUserRegistrationDto = GivenUserUtil.givenValidUserRegistrationDto();
    }

    @Nested
    @DisplayName("Not valid email request test group")
    class UserRestControllerNotValidEmailRequestTest {

        @BeforeEach
        void setUp() {
            givenUserRegistrationDto.setEmail("not valid email");
        }

        @Test
        @WithAnonymousUser
        @DisplayName("Not valid email request test, should return 400 (Bad Request) as status code")
        void registrationTest() throws Exception {
            // Given anonymous user
            final var user = GivenUserUtil.givenValidUserRegistrationDto();

            // When
            final var result = mockMvc.perform(post(UserApiUrl.USER_BASE_URL + UserApiUrl.USER_REGISTRATION_URL)
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON)
                    .with(csrf())
                    .content(objectMapper.writeValueAsString(user))).andExpect(status().isBadRequest()).andReturn();

            final var errorResponse = objectMapper.readValue(result.getResponse().getContentAsString(),
                    ErrorServerResponseDto.class);

            // Then
            Assertions.assertThat(errorResponse.getMsg()).isEqualTo("Validation Error");
        }
    }
}
