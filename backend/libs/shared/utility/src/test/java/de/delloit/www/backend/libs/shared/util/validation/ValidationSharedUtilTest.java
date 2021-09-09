package de.delloit.www.backend.libs.shared.util.validation;

import de.delloit.www.backend.libs.shared.error.domain.common.MobilePhoneValidationSharedError;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

@DisplayName("Validation test group")
public class ValidationSharedUtilTest {

    @ParameterizedTest
    @DisplayName("Valid mobile phone number test")
    @ValueSource(strings = {"+79956238073", "+491745215204", "+4915757072080", "+491733195388"})
    void validMobilePhoneNumberTest(String givenMobilePhoneNumber) throws MobilePhoneValidationSharedError {
        // When
        final var phoneNumber = PhoneValidationSharedUtil.validateMobilePhoneNumber(givenMobilePhoneNumber);

        // Then
        Assertions.assertThat(phoneNumber.getNationalNumber()).isNotNull();
    }

    @ParameterizedTest
    @DisplayName("Not valid mobile phone number test")
    @ValueSource(strings = {"74956238073", "491745215204", "015757072080", "15757072080"})
    void notValidMobilePhoneNumberTest(String givenMobilePhoneNumber) throws MobilePhoneValidationSharedError {
        // Then
        Assertions.assertThatExceptionOfType(MobilePhoneValidationSharedError.class)
                // When
                .isThrownBy(() -> PhoneValidationSharedUtil.validateMobilePhoneNumber(givenMobilePhoneNumber));
    }
}
