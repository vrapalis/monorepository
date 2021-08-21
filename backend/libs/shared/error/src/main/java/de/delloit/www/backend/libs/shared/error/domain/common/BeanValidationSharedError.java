package de.delloit.www.backend.libs.shared.error.domain.common;

import lombok.Getter;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

public class BeanValidationSharedError extends Exception {
    @Getter
    private final Map<String, String> errors = new HashMap<>();

    public BeanValidationSharedError(BindingResult result) {
        super("Bean validation errors: " + result.toString());
        result.getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
    }
}
