package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.controller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.error.OAuth2UserForgotPasswordException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.error.OAuth2UserRegistrationCodeException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.error.OAuth2UserRegistrationException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.error.OAuth2UserResetPasswordException;
import de.delloit.www.backend.libs.shared.dto.domain.server.ErrorServerResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

// TODO UNIFY RUNTIME EXCEPTIONS?
@ControllerAdvice
public class OAuth2ControllerAdvice extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = OAuth2UserRegistrationException.class)
    private ResponseEntity<Object> registrationExceptionHandler(OAuth2UserRegistrationException ex, WebRequest request) {
        final var errorServerResponseDto = new ErrorServerResponseDto("Error", ex.getMsg());
        if (ex.getHttpStatus() == HttpStatus.INTERNAL_SERVER_ERROR) {
            return ResponseEntity.internalServerError().body(errorServerResponseDto);
        } else {
            return ResponseEntity.badRequest().body(errorServerResponseDto);
        }
    }

    @ExceptionHandler(value = OAuth2UserRegistrationCodeException.class)
    private ResponseEntity<Object> registrationCodeExceptionHandler(OAuth2UserRegistrationCodeException ex) {
        final var errorServerResponseDto = new ErrorServerResponseDto("Error", ex.getMsg());
        if (ex.getHttpStatus() == HttpStatus.INTERNAL_SERVER_ERROR) {
            return ResponseEntity.internalServerError().body(errorServerResponseDto);
        } else {
            return ResponseEntity.badRequest().body(errorServerResponseDto);
        }
    }

    @ExceptionHandler(value = OAuth2UserForgotPasswordException.class)
    private ResponseEntity<Object> forgotPasswordExceptionHandler(OAuth2UserForgotPasswordException ex) {
        final var errorServerResponseDto = new ErrorServerResponseDto("Error", ex.getMsg());
        if (ex.getHttpStatus() == HttpStatus.INTERNAL_SERVER_ERROR) {
            return ResponseEntity.internalServerError().body(errorServerResponseDto);
        } else {
            return ResponseEntity.badRequest().body(errorServerResponseDto);
        }
    }

    @ExceptionHandler(value = OAuth2UserResetPasswordException.class)
    private ResponseEntity<Object> resetPasswordExceptionHandler(OAuth2UserResetPasswordException ex) {
        final var errorServerResponseDto = new ErrorServerResponseDto("Error", ex.getMsg());
        if (ex.getHttpStatus() == HttpStatus.INTERNAL_SERVER_ERROR) {
            return ResponseEntity.internalServerError().body(errorServerResponseDto);
        } else {
            return ResponseEntity.badRequest().body(errorServerResponseDto);
        }
    }
}
