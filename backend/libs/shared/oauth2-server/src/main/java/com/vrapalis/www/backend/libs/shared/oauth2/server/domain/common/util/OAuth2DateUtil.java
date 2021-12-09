package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.util;

import java.time.Duration;
import java.util.Date;

public interface OAuth2DateUtil {
    Date currentDateMinusDuration(Duration duration);
}
