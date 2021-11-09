package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.url.CommonApiUrl;
import lombok.experimental.UtilityClass;

@UtilityClass
public class UserApiUrl {
    public static final String USER_BASE_URL = CommonApiUrl.API_BASE_URL + "/users";
    public static final String USER_REGISTRATION_URL = "/registration";
}
