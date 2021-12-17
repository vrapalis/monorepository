package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.url;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.url.CommonApiUrl;
import lombok.experimental.UtilityClass;

@UtilityClass
public class OAuth2ClientApiUrl {

    public static final String CLIENT_BASE_URL = CommonApiUrl.API_BASE_URL + "/clients";
    public static final String CLIENT_PROVIDER_URL = "/providers";
}
