package com.vrapalis.www.backend.libs.shared.util.validation;

import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.Phonenumber;
import de.delloit.www.backend.libs.shared.error.domain.common.MobilePhoneValidationSharedError;
import lombok.NonNull;
import lombok.experimental.UtilityClass;

@UtilityClass
public class PhoneValidationSharedUtil {
    private PhoneNumberUtil phoneUtil = PhoneNumberUtil.getInstance();

    public static Phonenumber.PhoneNumber validateMobilePhoneNumber(@NonNull String mobilePhoneNumber) throws MobilePhoneValidationSharedError {
        try {
            final var phoneNumber = phoneUtil.parse(mobilePhoneNumber, "GER");
            phoneUtil.isValidNumber(phoneNumber);
            PhoneNumberUtil.PhoneNumberType phoneNumberType = phoneUtil.getNumberType(phoneNumber);
            if (!phoneNumberType.equals(PhoneNumberUtil.PhoneNumberType.MOBILE)) {
                throw new MobilePhoneValidationSharedError("The Format of the mobile phone number is not of MOBILE type");
            }
            return phoneNumber;
        } catch (NumberParseException e) {
            throw new MobilePhoneValidationSharedError(e.getMessage());
        }
    }
}
