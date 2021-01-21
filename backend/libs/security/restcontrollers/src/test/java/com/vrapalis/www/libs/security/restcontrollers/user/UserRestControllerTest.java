package com.vrapalis.www.libs.security.restcontrollers.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUser;
import com.vrapalis.www.libs.security.restcontrollers.AbstractControllerTest;
import com.vrapalis.www.libs.security.services.domains.user.LibsSecurityWebUserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DisplayName("User rest controller test group")
public class UserRestControllerTest extends AbstractControllerTest {

    @MockBean
    private LibsSecurityWebUserService userService;

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

            getMockMvc().perform(post("/api/users/sign-in")
                    .content(getObjectMapper().writeValueAsString(givenSignInBeanDto))
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isBadRequest());
        }
    }
}
