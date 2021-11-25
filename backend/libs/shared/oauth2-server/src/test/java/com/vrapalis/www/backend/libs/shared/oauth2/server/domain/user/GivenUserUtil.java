package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationExceptionDto;
import lombok.experimental.UtilityClass;

@UtilityClass
public class GivenUserUtil {

    public static OAuth2UserRegistrationExceptionDto givenValidUserRegistrationDto() {
        return  new OAuth2UserRegistrationExceptionDto("mike@email.com", "2461351", "2461351");
    }
}
