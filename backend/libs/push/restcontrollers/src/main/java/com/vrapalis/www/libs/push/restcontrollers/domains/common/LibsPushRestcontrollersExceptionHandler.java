package com.vrapalis.www.libs.push.restcontrollers.domains.common;

import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.push.dtos.domains.common.LibsPushDtosServerErrorResponse;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerBeanValidationErrorResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.mail.MessagingException;

@ControllerAdvice
public class LibsPushRestcontrollersExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * Bean validation exception handler.
     *
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(value = LibsErrorBeanValidation.class)
    protected ResponseEntity<Object> beanValidationExceptionHandler(LibsErrorBeanValidation ex, WebRequest request) {
        final var errorResponse = LibsWebDtoServerBeanValidationErrorResponse
                .builder()
                .detailedErrorMsg(ex.getMessage())
                .build();
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    /**
     * Send email exception handler.
     *
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(value = MessagingException.class)
    protected ResponseEntity<Object> sendEmailExceptionHandler(MessagingException ex, WebRequest request) {
        final var errorResponse = new LibsPushDtosServerErrorResponse("Send email error", ex.getMessage());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }
}
