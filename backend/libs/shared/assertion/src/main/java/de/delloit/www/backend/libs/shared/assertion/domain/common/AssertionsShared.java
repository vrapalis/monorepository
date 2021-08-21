package de.delloit.www.backend.libs.shared.assertion.domain.common;

import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import lombok.experimental.UtilityClass;
import org.springframework.validation.BindingResult;

@UtilityClass
public class AssertionsShared {
    public static void assertNoBeanValidationErrors(final BindingResult result) throws BeanValidationSharedError {
        if(result.hasErrors()) {
            throw new BeanValidationSharedError(result);
        }
    }
}
