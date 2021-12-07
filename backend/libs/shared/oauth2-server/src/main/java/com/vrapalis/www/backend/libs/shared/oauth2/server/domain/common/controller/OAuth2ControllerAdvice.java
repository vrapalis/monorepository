package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.controller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2RegistrationCodeException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2RegistrationException;
import de.delloit.www.backend.libs.shared.dto.domain.server.ErrorServerResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class OAuth2ControllerAdvice extends ResponseEntityExceptionHandler {

    @ExceptionHandler(OAuth2RegistrationException.class)
    private ResponseEntity<Object> registrationExceptionHandler(OAuth2RegistrationException ex, WebRequest request) {
        final var errorServerResponseDto = new ErrorServerResponseDto("Error", ex.getMessage());
        if (ex.getHttpStatus() == HttpStatus.INTERNAL_SERVER_ERROR) {
            return ResponseEntity.internalServerError().body(errorServerResponseDto);
        } else {
            return ResponseEntity.badRequest().body(errorServerResponseDto);
        }
    }

    @ExceptionHandler(OAuth2RegistrationCodeException.class)
    private ResponseEntity<Object> registrationCodeExceptionHandler(OAuth2RegistrationCodeException ex, WebRequest request) {
        final var errorServerResponseDto = new ErrorServerResponseDto("Error", ex.getMessage());
        if (ex.getHttpStatus() == HttpStatus.INTERNAL_SERVER_ERROR) {
            return ResponseEntity.internalServerError().body(errorServerResponseDto);
        } else {
            return ResponseEntity.badRequest().body(errorServerResponseDto);
        }
    }

}
