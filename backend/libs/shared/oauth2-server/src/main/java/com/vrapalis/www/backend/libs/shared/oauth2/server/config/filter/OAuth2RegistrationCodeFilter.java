package com.vrapalis.www.backend.libs.shared.oauth2.server.config.filter;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserRegistrationCodeEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserRegistrationCodeService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.OAuth2UserApiUrl;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Log4j2
//@Component
@AllArgsConstructor
public class OAuth2RegistrationCodeFilter extends OncePerRequestFilter {
    private static final String PARAMETER_CODE_NAME = "code";
    private final String REGISTRATION_PATH = OAuth2UserApiUrl.USER_REGISTRATION_URL;
    private OAuth2UserRegistrationCodeService codeService;
    private OAuth2UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) {
        try {
            final var code = request.getParameter(PARAMETER_CODE_NAME);
            final var uuid = UUID.fromString(code);
            OAuth2UserRegistrationCodeEntity codeEntity = codeService.findByCode(uuid);
            userService.completeRegistration(codeEntity.getUserId());
            OAuth2HtmlPageGenerationUtil.generateRegistrationCodeHtmlSuccessPage(response);
        }catch (Exception ex) {
            OAuth2HtmlPageGenerationUtil.generateRegistrationCodeHtmlErrorPage(response);
        }
        return;
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        final var codeNotNull = request.getParameter(PARAMETER_CODE_NAME) != null;
        final var requestMethod = request.getMethod();
        final var isPostMethod = requestMethod.equals("GET");
        final var shouldNotFilter = (request.getServletPath().equals(REGISTRATION_PATH) && isPostMethod && codeNotNull);
//        return !shouldNotFilter;
        return true;
    }
}
