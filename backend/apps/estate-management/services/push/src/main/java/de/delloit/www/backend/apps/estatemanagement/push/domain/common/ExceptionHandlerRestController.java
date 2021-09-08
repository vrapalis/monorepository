package de.delloit.www.backend.apps.estatemanagement.push.domain.common;

import de.delloit.www.backend.apps.estatemanagement.push.domain.email.SendEmailError;
import de.delloit.www.backend.apps.estatemanagement.push.domain.sms.SendSmsError;
import de.delloit.www.backend.libs.shared.dto.domain.server.ErrorServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionHandlerRestController extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = SendSmsError.class)
    protected ResponseEntity<Object> sendSmsExceptionHandler(SendSmsError ex, WebRequest request) {
        final var errorResponse = new ErrorServerResponseDto("Error", ex.getMessage());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    @ExceptionHandler(value = SendEmailError.class)
    protected ResponseEntity<Object> sendEmailExceptionHandler(SendEmailError ex, WebRequest request) {
        final var errorResponse = new ErrorServerResponseDto("Send email error", ex.getMessage());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    @ExceptionHandler(value = BeanValidationSharedError.class)
    protected ResponseEntity<Object> beanValidationExceptionHandler(BeanValidationSharedError ex, WebRequest request) {
        final var errorResponse = new ErrorServerResponseDto("Bean validation error", ex.getMessage());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.UNPROCESSABLE_ENTITY, request);
    }
}
