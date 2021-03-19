package com.vrapalis.www.entryou.entry.domain.commons;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinErrorDto;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerBeanValidationErrorResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionHandlerRestController extends ResponseEntityExceptionHandler {

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
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.UNPROCESSABLE_ENTITY, request);
    }

    /**
     * Checkin exception handler.
     *
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(value = CheckInException.class)
    protected ResponseEntity<Object> checkinExceptionHandler(CheckInException ex, WebRequest request) {
        final var errorResponse = CheckinErrorDto.builder().build();
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), HttpStatus.UNPROCESSABLE_ENTITY, request);
    }
}
