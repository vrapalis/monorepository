package com.vrapalis.www.backend.libs.shared.oauth2.server.config.filter;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserAccountEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserInfoEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.OAuth2UserRepository;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.OAuth2UserApiUrl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Log4j2
@Component
public class OAuth2RegistrationFilter extends OncePerRequestFilter {
    private final String REGISTRATION_PATH = OAuth2UserApiUrl.USER_REGISTRATION_URL;
    private final String SUCCESS_REGISTRATION_URL = "/registration-success";
    private final String REGISTRATION_ERROR_URL = "/registration?error";

    @Autowired
    private RegisteredClientRepository registeredClientRepository;
    @Autowired
    private OAuth2UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        final var email = request.getParameter("email");
        final var password = request.getParameter("password");
        final var passwordRepeated = request.getParameter("passwordRepeated");
        final var redirect_url = request.getParameter("client_id");
        final var client_id = request.getParameter("redirect_url");

        if (request.getUserPrincipal() != null) {
            response.sendRedirect(REGISTRATION_ERROR_URL);
            return;
        }

        if (email == null || password == null || passwordRepeated == null) {
            response.sendRedirect(REGISTRATION_ERROR_URL);
            return;
        }

        if (!password.equals(passwordRepeated)) {
            response.sendRedirect(REGISTRATION_ERROR_URL);
            return;
        }

        try {
            final var userInfo = new OAuth2UserInfoEntity();
            final var accountEntity = new OAuth2UserAccountEntity();
            accountEntity.setPassword(password);
            accountEntity.setAccountNonExpired(false);
            accountEntity.setAccountNonLocked(false);
            accountEntity.setCredentialsNonExpired(false);
            accountEntity.setIsEnabled(false);

            final var userEntity = new OAuth2UserEntity();
            userEntity.setEmail(email);
            userInfo.setUser(userEntity);
            userEntity.setInfo(userInfo);
            accountEntity.setUser(userEntity);
            userEntity.setAccount(accountEntity);

            userRepository.saveAndFlush(userEntity);

            if (redirect_url != null && client_id != null) {
                final var byClientId = registeredClientRepository.findByClientId(client_id);
                if (byClientId == null) {
                    response.sendRedirect("/registration");
                }
                response.sendRedirect(SUCCESS_REGISTRATION_URL + "/" + redirect_url);
            } else {
                response.sendRedirect(SUCCESS_REGISTRATION_URL);
            }
        } catch (Exception e) {
            response.sendRedirect(REGISTRATION_ERROR_URL);
            return;
        }
        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        final var requestMethod = request.getMethod();
        final var isPostMethod = requestMethod.equals("POST");
        final var shouldNotFilter = (request.getServletPath().equals(REGISTRATION_PATH) && isPostMethod);
        return !shouldNotFilter;
    }
}
