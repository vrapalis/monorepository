package de.delloit.www.backend.libs.shared.error.domain.common;

public class MobilePhoneValidationSharedError extends Exception {
    public MobilePhoneValidationSharedError(String errorReason) {
        super("Mobile phone validation error, reason: \n " + errorReason);
    }
}
