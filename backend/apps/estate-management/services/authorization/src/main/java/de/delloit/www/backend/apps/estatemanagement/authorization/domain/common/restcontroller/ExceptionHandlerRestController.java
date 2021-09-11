package de.delloit.www.backend.apps.estatemanagement.authorization.domain.common.restcontroller;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error.UserSignInError;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error.UserSignUpError;
import de.delloit.www.backend.libs.shared.dto.domain.server.ErrorServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import de.delloit.www.backend.libs.shared.error.domain.common.MobilePhoneValidationSharedError;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionHandlerRestController extends ResponseEntityExceptionHandler {

    @ExceptionHandler(MobilePhoneValidationSharedError.class)
    protected ResponseEntity<Object> mobilePhoneValidationExceptionHandler(MobilePhoneValidationSharedError ex, WebRequest request) {
        final var errorResponse = new ErrorServerResponseDto("Error", ex.getMessage());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    @ExceptionHandler(UserSignUpError.class)
    protected ResponseEntity<Object> userSignUpExceptionHandler(UserSignUpError ex, WebRequest request) {
        final var errorResponse = new ErrorServerResponseDto("Error", ex.getMessage());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    @ExceptionHandler(UserSignInError.class)
    protected ResponseEntity<Object> userSignInExceptionHandler(UserSignInError ex, WebRequest request) {
        final var errorResponse = new ErrorServerResponseDto("Error", ex.getMessage());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    @ExceptionHandler(BeanValidationSharedError.class)
    protected ResponseEntity<Object> beanValidationExceptionHandler(BeanValidationSharedError ex, WebRequest request) {
        final var errorResponse = new ErrorServerResponseDto("Bean validation error", ex.getMessage());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.UNPROCESSABLE_ENTITY, request);
    }
}
