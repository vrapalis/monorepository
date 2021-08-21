package de.delloit.www.backend.libs.shared.util;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Token shared utility test")
public class TokenGenerationSharadUtilityTest {

    @Test
    @DisplayName("Generate sixth digits test")
    void generateSixthDigitsTokenTest() {
        Integer token = TokenGenerationSharadUtility.generateSixthDigitsToken();
        Assertions.assertThat(token).isPositive().isGreaterThan(000001);
    }
}
