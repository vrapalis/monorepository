package de.delloit.www.backend.apps.estatemanagement.authorization.config.scheduled;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@EnableAsync
@Configuration
@EnableScheduling
public class ScheduleConfiguration {

    @Async
    @Scheduled(fixedRateString = "${estate-management.authorization-service.scheduled.fixed-rate.delete-password}")
    public void deleteUnusedPassword() throws InterruptedException {

    }
}
