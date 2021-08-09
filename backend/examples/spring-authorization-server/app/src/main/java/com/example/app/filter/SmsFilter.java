package com.example.app.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class SmsFilter extends OncePerRequestFilter {
    @Autowired
    public UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final var username = request.getParameter("username");

        if (username != null) {
            try {
                final var userDetails = userDetailsService.loadUserByUsername(username);
                response.sendRedirect("http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=read");
            } catch (Exception ex) {
                response.sendRedirect("http://localhost:8080/sms");
            }
        } else {
            filterChain.doFilter(request, response);
        }
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String path = request.getRequestURI();
        return !path.equals("/sms");
    }
}
