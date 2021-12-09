package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.util;

import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Clock;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Date;

@Service
public class OAuth2DateUtilImpl implements OAuth2DateUtil {

    @Override
    public Date currentDateMinusDuration(Duration duration) {
        final var localDateTimeNow = LocalDateTime.now().minus(duration);
        return Timestamp.valueOf(localDateTimeNow);
    }
}
