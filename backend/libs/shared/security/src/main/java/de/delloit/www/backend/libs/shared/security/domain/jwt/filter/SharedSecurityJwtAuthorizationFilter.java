package de.delloit.www.backend.libs.shared.security.domain.jwt.filter;

import de.delloit.www.backend.libs.shared.security.domain.jwt.error.SharedSecurityCreateAuthenticationError;
import de.delloit.www.backend.libs.shared.security.domain.jwt.service.SharedSecurityJwtService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;

@Component
@AllArgsConstructor
public class SharedSecurityJwtAuthorizationFilter extends OncePerRequestFilter {
    private SharedSecurityJwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final var authorizationBearerToken = request.getHeader("Authorization");
        if (Objects.nonNull(authorizationBearerToken)) {
            final var jwtToken = authorizationBearerToken.replace("Bearer", " ").trim();
            try {
                final var authentication = jwtService.createAuthentication(jwtToken, "");
                SecurityContextHolder.getContext().setAuthentication(authentication);
            } catch (SharedSecurityCreateAuthenticationError e) {
            }
        }
        filterChain.doFilter(request, response);
    }
}
