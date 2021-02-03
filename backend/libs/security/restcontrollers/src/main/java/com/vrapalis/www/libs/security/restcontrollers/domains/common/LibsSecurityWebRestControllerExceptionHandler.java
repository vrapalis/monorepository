package com.vrapalis.www.libs.security.restcontrollers.domains.common;

import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtosSignInErrorResponse;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtosSignUpConfirmErrorResponse;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtosSignUpErrorResponse;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignIn;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignUp;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignUpConfirm;
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
    @ExceptionHandler(value = LibsSecurityErrorSignIn.class)
    protected ResponseEntity<Object> authenticationExceptionHandler(LibsSecurityErrorSignIn ex, WebRequest request) {
        final var errorResponse = new LibsSecurityDtosSignInErrorResponse();
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

    /**
     * Sign up exception handler.
     *
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(value = LibsSecurityErrorSignUp.class)
    protected ResponseEntity<Object> signUpExceptionHandler(LibsSecurityErrorSignUp ex, WebRequest request) {
        final var errorResponse = new LibsSecurityDtosSignUpErrorResponse();
        errorResponse.setMsg(ex.getErrorMsg());
        errorResponse.setDetailedErrorMsg(ex.getDetailedErrorMsg());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    /**
     * Sign up confirm exception handler.
     *
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(value = LibsSecurityErrorSignUpConfirm.class)
    protected ResponseEntity<Object> signUpConfirmExceptionHandler(LibsSecurityErrorSignUpConfirm ex, WebRequest request) {
        final var errorResponse = new LibsSecurityDtosSignUpConfirmErrorResponse();
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }
}
