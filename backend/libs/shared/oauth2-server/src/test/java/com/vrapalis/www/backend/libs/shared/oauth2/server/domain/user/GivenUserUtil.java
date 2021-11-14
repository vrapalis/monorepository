package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.UserRegistrationDto;
import lombok.experimental.UtilityClass;

@UtilityClass
public class GivenUserUtil {

    public static UserRegistrationDto givenValidUserRegistrationDto() {
        return  new UserRegistrationDto("mike@email.com", "2461351", "2461351");
    }
}
