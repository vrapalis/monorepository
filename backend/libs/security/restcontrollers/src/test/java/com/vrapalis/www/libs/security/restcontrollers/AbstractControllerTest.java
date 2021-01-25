package com.vrapalis.www.libs.security.restcontrollers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vrapalis.www.libs.security.services.domains.user.LibsSecurityUserDetailsServiceImp;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@Getter
//@WebMvcTest(excludeAutoConfiguration = {SecurityAutoConfiguration.class})
@WebMvcTest(excludeAutoConfiguration = {})
public class AbstractControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private LibsSecurityUserDetailsServiceImp userDetailsService;
}
