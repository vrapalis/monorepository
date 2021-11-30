package com.vrapalis.www.backend.libs.shared.oauth2.server.config.schedul;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserRegistrationCodeService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.*;
import java.util.Date;

@Log4j2
@Configuration
@EnableScheduling
@AllArgsConstructor
public class OAuth2SchedulingConfiguration {
    private OAuth2UserRegistrationCodeService codeService;

    @Scheduled(fixedDelay = 50000)
    public void scheduleUserRegistrationCodeDeletion() throws InterruptedException {
        try {
            final var now = LocalDateTime.now(Clock.systemUTC()).minus(Duration.ofMinutes(5));
            codeService.deleteRegistrationBeforeThan(Date.from(now.atZone(ZoneId.systemDefault()).toInstant()));
        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }
}
