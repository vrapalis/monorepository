package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Service;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
public class OAuth2AuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws ServletException, IOException {
        final var user = authentication.getPrincipal();
        System.out.println("OAUTH2USER: " + user.getClass());
        // TODO PERSIST USER IN DB
        super.onAuthenticationSuccess(request, response, authentication);
    }
}
