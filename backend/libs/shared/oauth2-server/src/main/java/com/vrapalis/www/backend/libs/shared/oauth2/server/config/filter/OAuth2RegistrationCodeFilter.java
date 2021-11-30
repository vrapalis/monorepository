package com.vrapalis.www.backend.libs.shared.oauth2.server.config.filter;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.model.OAuth2EmailSendDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props.OAuth2RegistrationPropertiesTemplate;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.service.OAuth2EmailService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserAccountEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserInfoEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserRegistrationCodeEntity;
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
import java.nio.charset.StandardCharsets;
import java.util.UUID;

@Log4j2
@Component
public class OAuth2RegistrationCodeFilter extends OncePerRequestFilter {
    private final String REGISTRATION_PATH = OAuth2UserApiUrl.USER_REGISTRATION_URL;
    private final String REGISTRATION_ERROR_URL = "/registration?error";

    @Autowired
    private RegisteredClientRepository registeredClientRepository;

    @Autowired
    private OAuth2UserRepository userRepository;

    @Autowired
    private OAuth2EmailService emailService;

    @Autowired
    private OAuth2RegistrationPropertiesTemplate emailTemplate;

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

            final var codeEntity = new OAuth2UserRegistrationCodeEntity();
            codeEntity.setCode(UUID.randomUUID());

            final var userEntity = new OAuth2UserEntity();
            userEntity.setEmail(email);
            userInfo.setUser(userEntity);
            userEntity.setInfo(userInfo);
            accountEntity.setUser(userEntity);
            userEntity.setAccount(accountEntity);
            userEntity.setRegistrationCode(codeEntity);
            codeEntity.setUser(userEntity);

            final var registeredUser = userRepository.saveAndFlush(userEntity);
            final var link = request.getScheme() + "://" + request.getRemoteHost() + ":" + request.getLocalPort()
                    + "/registration?code=" + codeEntity.getCode();

            final var emailDto = OAuth2EmailSendDto.builder()
                    .mailTo(registeredUser.getEmail())
                    .subject(emailTemplate.getSubject())
                    .text(String.format(emailTemplate.getText(), link))
                    .build();
            emailService.sendMimeMessage(emailDto);

            // TODO REDIRECT TO REGISTERED CLIENT
            if (redirect_url != null && client_id != null) {
                final var byClientId = registeredClientRepository.findByClientId(client_id);
                if (byClientId == null) {
                    response.sendRedirect("/registration?error");
                }
                response.sendRedirect(redirect_url);
            } else {
                final var generateSuccessPage = generateSuccessPage();
                response.setContentType("text/html;charset=UTF-8");
                response.setContentLength(generateSuccessPage.getBytes(StandardCharsets.UTF_8).length);
                response.getWriter().write(generateSuccessPage);
            }
        } catch (Exception e) {
            response.sendRedirect(REGISTRATION_ERROR_URL);
        }
        return;
    }

    private String generateSuccessPage() {
        StringBuilder page = new StringBuilder();
        page.append("<!DOCTYPE html>\n");
        page.append("<html lang=\"en\">\n");
        page.append("  <head>\n");
        page.append("    <meta charset=\"utf-8\">\n");
        page.append("    <meta name=\"viewport\" content=\"width=device-width initial-scale=1 shrink-to-fit=no\">\n");
        page.append("    <meta name=\"description\" content=\"\">\n");
        page.append("    <meta name=\"author\" content=\"\">\n");
        page.append("    <title>Registration Successful</title>\n");
        page.append("    <link href=\"/webjars/bootstrap/5.0.0/css/bootstrap.min.css\" "
                + "rel=\"stylesheet\" crossorigin =\"anonymous\">\n");
        page.append("    <link href=\"/main.css\" "
                + "rel=\"stylesheet\" crossorigin=\"anonymous\"/>\n");
        page.append("  </head>\n");
        page.append("  <body>\n");
        page.append("<div class=\"container mt-5 \">\n");
        page.append("<h3>Check your email address.</h3>\n");
        page.append("</div>\n");
        page.append("  </body>\n");
        page.append("</html>");

        return page.toString();
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        final var requestMethod = request.getMethod();
        final var isPostMethod = requestMethod.equals("POST");
        final var shouldNotFilter = (request.getServletPath().equals(REGISTRATION_PATH) && isPostMethod);
        return !shouldNotFilter;
    }
}
