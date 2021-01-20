package com.vrapalis.www.libs.assertions;

import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import org.springframework.validation.BindingResult;

public final class LibsAssertions {
    public LibsAssertions() throws IllegalAccessException {
        throw new IllegalAccessException();
    }

    public static void assertNoBeanValidationErrors(final BindingResult result) throws LibsErrorBeanValidation {
        if(result.hasErrors()) {
            throw new LibsErrorBeanValidation(result);
        }
    }
}
