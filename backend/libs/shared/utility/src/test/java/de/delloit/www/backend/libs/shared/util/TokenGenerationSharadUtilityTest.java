package de.delloit.www.backend.libs.shared.util;

import lombok.extern.log4j.Log4j2;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Test;

@Log4j2
@DisplayName("Token shared utility test")
public class TokenGenerationSharadUtilityTest {

    @Test
    @RepeatedTest(10)
    @DisplayName("Generate sixth digits test")
    void generateSixthDigitsTokenTest() {
        String token = TokenGenerationSharadUtility.generateSixthDigitsToken();
        log.info("Generated token: " + token);
        Assertions.assertThat(token).hasSize(6);
        Assertions.assertThat(Integer.valueOf(token)).isPositive().isLessThan(1000000);
    }
}
