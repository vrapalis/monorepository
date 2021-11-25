package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user;

import com.vrapalis.www.backend.libs.shared.oauth2.server.config.RestControllerTestConfiguration;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationExceptionDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.OAuth2UserApiUrl;
import de.delloit.www.backend.libs.shared.dto.domain.server.ErrorServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithAnonymousUser;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DisplayName("User rest controller group test")
public class UserRestControllerTest extends RestControllerTestConfiguration {
    private OAuth2UserRegistrationExceptionDto givenUserRegistrationDto;

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
        void notValidEmailBadRequestTest() throws Exception {
            // When
            final var result = mockMvc.perform(post(OAuth2UserApiUrl.USER_BASE_URL + OAuth2UserApiUrl.USER_REGISTRATION_URL)
                            .accept(MediaType.APPLICATION_JSON)
                            .contentType(MediaType.APPLICATION_JSON)
                            .with(csrf())
                            .content(objectMapper.writeValueAsString(givenUserRegistrationDto)))
                    .andExpect(status().isBadRequest()).andReturn();

            final var errorResponse = objectMapper.readValue(result.getResponse().getContentAsString(),
                    ErrorServerResponseDto.class);

            // Then
            Assertions.assertThat(errorResponse.getMsg()).isEqualTo("Validation Error");
        }

    }

    @Nested
    @DisplayName("Not valid password request test group")
    class UserRestControllerNotValidPasswordRequestTest {

        @BeforeEach
        void setUp() {
            givenUserRegistrationDto.setPassword("1234");
        }

        @Test
        @WithAnonymousUser
        @DisplayName("Not valid password request test, should return 400 (Bad Request) as status code")
        void notValidPasswordBadRequestTest() throws Exception {
            // When
            final var result = mockMvc.perform(post(OAuth2UserApiUrl.USER_BASE_URL + OAuth2UserApiUrl.USER_REGISTRATION_URL)
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON)
                    .with(csrf())
                    .content(objectMapper.writeValueAsString(givenUserRegistrationDto)))
                    .andExpect(status().isBadRequest()).andReturn();

            final var errorResponse = objectMapper.readValue(result.getResponse().getContentAsString(),
                    ErrorServerResponseDto.class);

            // Then
            Assertions.assertThat(errorResponse.getMsg()).isEqualTo("Validation Error");
        }
    }

    @Nested
    @DisplayName("Valid request test group")
    class UserRestControllerValidRequestTest {

        @Mock
        private OAuth2UserService userService;

        @Test
        @DisplayName("Valid request test")
        void validRequestTest() throws Exception {
            // When
            final var result = mockMvc.perform(post(OAuth2UserApiUrl.USER_BASE_URL + OAuth2UserApiUrl.USER_REGISTRATION_URL)
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON)
                    .with(csrf())
                    .content(objectMapper.writeValueAsString(givenUserRegistrationDto))).andExpect(status()
                    .isCreated()).andReturn();

            final var responseDto = objectMapper.readValue(result.getResponse().getContentAsString(),
                    SuccessServerResponseDto.class);

            // Then
            Assertions.assertThat(responseDto.getMsg()).isEqualTo("Registration Success");
        }
    }
}
