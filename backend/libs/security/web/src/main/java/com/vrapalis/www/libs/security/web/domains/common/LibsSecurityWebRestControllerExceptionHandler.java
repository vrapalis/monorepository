package com.vrapalis.www.libs.security.web.domains.common;

import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoAuthenticationError;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthentication;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerBeanValidationErrorResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class LibsSecurityWebRestControllerExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * Authentication exception handler.
     *
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(value = LibsSecurityErrorAuthentication.class)
    protected ResponseEntity<Object> authenticationExceptionHandler(LibsSecurityErrorAuthentication ex, WebRequest request) {
        final var errorResponse = LibsSecurityDtoAuthenticationError
                .builder()
                .msg(ex.getErrorMsg())
                .detailedErrorMsg(ex.getDetailedErrorMsg())
                .build();
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

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
}
