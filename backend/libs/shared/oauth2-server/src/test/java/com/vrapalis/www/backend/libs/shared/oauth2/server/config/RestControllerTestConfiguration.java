package com.vrapalis.www.backend.libs.shared.oauth2.server.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller.UserRestControllerImp;
import com.vrapalis.www.backend.libs.shared.util.config.RestControllerAdviceConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;

@Import({OAuth2ServerConfiguration.class, RestControllerAdviceConfiguration.class})
@WebMvcTest({UserRestControllerImp.class})
public class RestControllerTestConfiguration {
    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    protected ObjectMapper objectMapper;

    @TestConfiguration
    public static class RestControllerTestNestedConfiguration {
        @Bean
        public ObjectMapper objectMapper() {
            return new ObjectMapper();
        }
    }
}
