package de.delloit.www.backend.libs.shared.assertion.domain.common;

import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import de.delloit.www.backend.libs.shared.error.domain.common.MobilePhoneValidationSharedError;
import de.delloit.www.backend.libs.shared.error.domain.common.PasswordIsNotSameSharedError;
import lombok.experimental.UtilityClass;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

import static com.vrapalis.www.backend.libs.shared.util.validation.PhoneValidationSharedUtil.validateMobilePhoneNumber;

@UtilityClass
public class CommonSharedAssertions {
    public static void assertNoBeanValidationErrors(final BindingResult result) throws BeanValidationSharedError {
        if (result.hasErrors()) {
            final Map<String, String> errors = new HashMap<>();
            result.getAllErrors().forEach((error) -> {
                String fieldName = ((FieldError) error).getField();
                String errorMessage = error.getDefaultMessage();
                errors.put(fieldName, errorMessage);
            });
            throw new BeanValidationSharedError(errors.toString());
        }
    }

    public static void assertValidMobilePhone(String mobilePhone) throws MobilePhoneValidationSharedError {
        validateMobilePhoneNumber(mobilePhone);
    }

    public static void assertPasswordIsSame(String password, String passwordRepeated) throws PasswordIsNotSameSharedError {
        if(!password.equals(passwordRepeated)) {
            throw new PasswordIsNotSameSharedError("Password is not the same.");
        }
    }
}
