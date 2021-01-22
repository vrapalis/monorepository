package com.vrapalis.www.libs.security.restcontrollers.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoAuthenticationSuccess;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUser;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthentication;
import com.vrapalis.www.libs.security.restcontrollers.AbstractControllerTest;
import com.vrapalis.www.libs.security.restcontrollers.domains.user.LibsSecurityWebUserApiUrls;
import com.vrapalis.www.libs.security.services.domains.user.LibsSecurityUserDetailsService;
import com.vrapalis.www.libs.security.services.domains.user.LibsSecurityUserService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DisplayName("User rest controller test group")
public class UserRestControllerTest extends AbstractControllerTest {

    @MockBean
    private LibsSecurityUserService userService;

    @Nested
    @DisplayName("Sign in tests group")
    class SignInTestGroup {

        private LibsSecurityDtoUser givenSignInBeanDto;

        @BeforeEach
        void setUp() {
            givenSignInBeanDto = LibsSecurityDtoUser.builder()
                    .password("123456")
                    .email("email@email.com")
                    .build();
        }

        @Test
        @DisplayName("Not valid dto bean, should return bad request")
        void notValidDtoBeanShouldThrowException() throws Exception {
            givenSignInBeanDto.setEmail("not_valid_email");

            getMockMvc().perform(post(LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1
                    + LibsSecurityWebUserApiUrls.USER_API_LOGIN_URL_V1)
                    .content(getObjectMapper().writeValueAsString(givenSignInBeanDto))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isBadRequest());
        }

        @Test
        @DisplayName("Not valid credentials, should throw bad request and properly error response")
        void notValidCredentialsShouldThrowException() throws Exception {

            Mockito.when(userService.signIn(givenSignInBeanDto)).thenThrow(LibsSecurityErrorAuthentication.class);

            final var mvcResult = getMockMvc().perform(post(LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1
                    + LibsSecurityWebUserApiUrls.USER_API_LOGIN_URL_V1)
                    .content(getObjectMapper().writeValueAsString(givenSignInBeanDto))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isBadRequest())
                    .andReturn();
            final var errorAuthentication = getObjectMapper()
                    .readValue(mvcResult.getResponse().getContentAsByteArray(), LibsSecurityErrorAuthentication.class);

            Assertions.assertThat(errorAuthentication.getErrorMsg())
                    .isEqualTo(new LibsSecurityErrorAuthentication().getErrorMsg());
        }

        @Test
        @DisplayName("Response should contain jwt token")
        void responseShouldContainJwtToken() throws Exception {
            Mockito.when(userService.signIn(givenSignInBeanDto)).thenReturn(ResponseEntity
                    .ok(Mockito.any()));

            final var mvcResult = getMockMvc().perform(post(LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1
                    + LibsSecurityWebUserApiUrls.USER_API_LOGIN_URL_V1)
                    .content(getObjectMapper().writeValueAsString(givenSignInBeanDto))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andReturn();
        }
    }
}
