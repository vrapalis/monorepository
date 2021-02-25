package com.vrapalis.www.libs.security.restcontrollers.domains.common;

import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.security.dtos.domains.user.*;
import com.vrapalis.www.libs.security.errors.domains.authentication.*;
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

    /**
     * Reset password exception handler.
     *
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(value = LibsSecurityErrorResetPassword.class)
    protected ResponseEntity<Object> resetPasswordExceptionHandler(LibsSecurityErrorResetPassword ex, WebRequest request) {
        final var errorResponse = new LibsSecurityDtosResetPasswordErrorResponse();
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    /**
     * Confirm reset password exception handler.
     *
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(value = LibsSecurityErrorResetPasswordConfirm.class)
    protected ResponseEntity<Object> resetPasswordConfirmExceptionHandler(LibsSecurityErrorResetPasswordConfirm ex, WebRequest request) {
        final var errorResponse = new LibsSecurityDtosResetPasswordConfirmErrorResponse();
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }
}
