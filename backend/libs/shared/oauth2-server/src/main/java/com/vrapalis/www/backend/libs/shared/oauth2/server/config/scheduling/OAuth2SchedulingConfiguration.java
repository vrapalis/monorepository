package com.vrapalis.www.backend.libs.shared.oauth2.server.config.scheduling;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.util.OAuth2DateUtil;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserPasswordCodeService;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserRegistrationCodeService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.*;

@Log4j2
@Configuration
@EnableScheduling
@AllArgsConstructor
public class OAuth2SchedulingConfiguration {

    private OAuth2UserRegistrationCodeService registrationCodeService;
    private OAuth2UserPasswordCodeService passwordCodeService;
    private OAuth2DateUtil dateUtil;

    @Scheduled(fixedDelay = 30000)
    public void scheduleUserRegistrationCodeDeletion() throws InterruptedException {
        try {
            registrationCodeService.deleteRegistrationBeforeThan(dateUtil.currentDateMinusDuration(Duration.ofMinutes(5)));
        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }

    @Scheduled(fixedDelay = 10000)
    public void scheduleUserPasswordCodeDeletion() throws InterruptedException {
        try {
            passwordCodeService.deletePasswordBeforeThan(dateUtil.currentDateMinusDuration(Duration.ofMinutes(5)));
        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }
}
