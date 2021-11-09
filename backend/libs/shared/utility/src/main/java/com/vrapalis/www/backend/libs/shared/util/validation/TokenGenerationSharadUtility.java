package com.vrapalis.www.backend.libs.shared.util.validation;

import lombok.experimental.UtilityClass;

import java.util.Random;

@UtilityClass
public class TokenGenerationSharadUtility {
    /**
     * @return Generate sixth digits random number.
     */
    public static String generateSixthDigitsToken() {
        // It will generate 6 digit random Number.
        // from 0 to 999999
        Random rnd = new Random();
        int number = rnd.nextInt(999999);

        // this will convert any number sequence into 6 character.
        return String.format("%06d", number);
    }
}
