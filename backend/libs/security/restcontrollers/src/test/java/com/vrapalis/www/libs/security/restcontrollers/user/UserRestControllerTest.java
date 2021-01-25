package com.vrapalis.www.libs.security.restcontrollers.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignInUser;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignUpSuccess;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignUpUser;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUserMsg;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignIn;
import com.vrapalis.www.libs.security.restcontrollers.AbstractControllerTest;
import com.vrapalis.www.libs.security.restcontrollers.domains.user.LibsSecurityWebUserApiUrls;
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

        private LibsSecurityDtoSignInUser givenSignInBeanDto;

        @BeforeEach
        void setUp() {
            givenSignInBeanDto = LibsSecurityDtoSignInUser.builder()
                    .password("123456")
                    .email("email@email.com")
                    .build();
        }

        @Test
        @DisplayName("Not valid dto bean, should return bad request")
        void notValidDtoBeanShouldThrowException() throws Exception {
            givenSignInBeanDto.setEmail("not_valid_email");

            getMockMvc().perform(post(LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1
                    + LibsSecurityWebUserApiUrls.USER_API_SIGN_IN_URL_V1)
                    .content(getObjectMapper().writeValueAsString(givenSignInBeanDto))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isBadRequest());
        }

        @Test
        @DisplayName("Not valid credentials, should throw bad request and properly error response")
        void notValidCredentialsShouldThrowException() throws Exception {

            Mockito.when(userService.signIn(givenSignInBeanDto)).thenThrow(LibsSecurityErrorSignIn.class);

            final var mvcResult = getMockMvc().perform(post(LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1
                    + LibsSecurityWebUserApiUrls.USER_API_SIGN_IN_URL_V1)
                    .content(getObjectMapper().writeValueAsString(givenSignInBeanDto))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isBadRequest())
                    .andReturn();
            final var errorAuthentication = getObjectMapper()
                    .readValue(mvcResult.getResponse().getContentAsByteArray(), LibsSecurityErrorSignIn.class);

            Assertions.assertThat(errorAuthentication.getErrorMsg())
                    .isEqualTo(new LibsSecurityErrorSignIn().getErrorMsg());
        }

        @Test
        @DisplayName("Response should be 200 ok")
        void responseShouldContainJwtToken() throws Exception {
            Mockito.when(userService.signIn(givenSignInBeanDto)).thenReturn(ResponseEntity
                    .ok(Mockito.any()));

            final var mvcResult = getMockMvc().perform(post(LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1
                    + LibsSecurityWebUserApiUrls.USER_API_SIGN_IN_URL_V1)
                    .content(getObjectMapper().writeValueAsString(givenSignInBeanDto))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andReturn();
        }
    }

    @Nested
    @DisplayName("Sign up test group")
    class SignUpTestGroup {
        private LibsSecurityDtoSignUpUser signUpUser;

        @BeforeEach
        void setUp() {
            signUpUser = LibsSecurityDtoSignUpUser.builder()
                    .build();
        }

        @Test
        @DisplayName("Try to sign up should get valid response")
        void signUpTest() throws Exception {
            final var mvcResult = getMockMvc().perform(post(LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1
                    + LibsSecurityWebUserApiUrls.USER_API_SIGN_UP_URL_V1)
                    .content(getObjectMapper().writeValueAsString(signUpUser))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andReturn();
            final var content = mvcResult.getResponse().getContentAsByteArray();
            final var dtoSignUpSuccess = getObjectMapper().readValue(content, LibsSecurityDtoSignUpSuccess.class);
            Assertions.assertThat(dtoSignUpSuccess.getMsg()).isEqualTo(LibsSecurityDtoUserMsg.SIGN_UP_SUCCESS_MSG);
        }
    }
}
