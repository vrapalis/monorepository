package de.delloit.www.backend.libs.shared.assertion.domain.common;

import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import de.delloit.www.backend.libs.shared.error.domain.common.MobilePhoneValidationSharedError;
import lombok.experimental.UtilityClass;
import org.springframework.validation.BindingResult;

import static de.delloit.www.backend.libs.shared.util.validation.PhoneValidationSharedUtil.validateMobilePhoneNumber;

@UtilityClass
public class CommonSharedAssertions {
    public static void assertNoBeanValidationErrors(final BindingResult result) throws BeanValidationSharedError {
        if (result.hasErrors()) {
            throw new BeanValidationSharedError(result);
        }
    }

    public static void assertValidMobilePhone(String mobilePhone) throws MobilePhoneValidationSharedError {
        validateMobilePhoneNumber(mobilePhone);
    }
}
