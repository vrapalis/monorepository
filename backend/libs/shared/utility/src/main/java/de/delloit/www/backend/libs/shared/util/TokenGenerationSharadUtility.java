package de.delloit.www.backend.libs.shared.util;

import lombok.experimental.UtilityClass;

import java.util.Random;

@UtilityClass
public class TokenGenerationSharadUtility {
    /**
     * @return Generate sixth digits random number.
     */
    public static Integer generateSixthDigitsToken() {
        final var random = new Random();
        return random.nextInt(1000000);
    }
}
