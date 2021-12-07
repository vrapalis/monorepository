package com.vrapalis.www.backend.libs.shared.oauth2.server.config.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.model.OAuth2EmailSendDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props.OAuth2RegistrationPropertiesTemplate;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.service.OAuth2EmailService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserPasswordCodeEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserRegistrationCodeEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.OAuth2PasswordCodeRepository;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.OAuth2UserRepository;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserRegistrationCodeService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.OAuth2UserApiUrl;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.ErrorServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.persistence.EntityNotFoundException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.UUID;

@Log4j2
@Component
@AllArgsConstructor
public class OAuth2ForgotPasswordFilter extends OncePerRequestFilter {

    private static final String EMAIL_PARAMETER_NAME = "email";
    private static final String FORGOT_PASSWORD_PATH = "/forgot-password";
    private OAuth2RegistrationPropertiesTemplate emailTemplate;
    private OAuth2PasswordCodeRepository passwordCodeRepository;
    private OAuth2UserService userService;
    private OAuth2UserRepository userRepository;
    private OAuth2EmailService emailService;
    private ObjectMapper objectMapper;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) {
        final var emailParameter = request.getParameter(EMAIL_PARAMETER_NAME);
        AbstractServerResponseDto serverResponse;
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);

        try {
            if(emailParameter == null){
                throw new IllegalArgumentException();
            }

            final var forgotPasswordCode = userService.forgotPassword(emailParameter);

            final var link = request.getScheme() + "://" + request.getRemoteHost() + ":" + request.getLocalPort()
                    + "/reset-password?code=" + forgotPasswordCode;

            final var emailDto = OAuth2EmailSendDto.builder()
                    .mailTo(emailParameter)
                    .subject(emailTemplate.getSubject())
                    .text(String.format(emailTemplate.getText(), link))
                    .build();

            emailService.sendMimeMessage(emailDto);

            serverResponse = new SuccessServerResponseDto("Success", "Send email with reset code success.");
            response.setStatus(HttpServletResponse.SC_CREATED);
        } catch (Exception e ) {
            serverResponse = new ErrorServerResponseDto("Error", "Something went wrong.");
        }

        try {
            response.getWriter().write(objectMapper.writeValueAsString(serverResponse));
        } catch (IOException e) {
            return;
        }
        return;
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        final var emailNotNull = request.getParameter(EMAIL_PARAMETER_NAME) != null;
        final var requestMethod = request.getMethod();
        final var isPostMethod = requestMethod.equals("POST");
        final var shouldFilter = (request.getServletPath().equals(FORGOT_PASSWORD_PATH) && isPostMethod && emailNotNull);
        return !shouldFilter;
    }
}
