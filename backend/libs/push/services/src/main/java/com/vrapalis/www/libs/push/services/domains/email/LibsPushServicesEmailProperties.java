package com.vrapalis.www.libs.push.services.domains.email;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Configuration
@ConfigurationProperties(prefix = "com.vrapalis.www.entryou.push.email.confirm")
@PropertySource("classpath:/config/email/email.properties")
public class LibsPushServicesEmailProperties {
    /**
     * Title of confirm email
     */
    @NotNull
    private String title;
    /**
     * Text of confirm email
     */
    @NotNull
    private String text;

    /**
     * Send of confirm email delay
     */
    @NotNull
    private String fixedEmailSendingDelay;

    /**
     * Clean old email which could not be send, cron
     */
    @NotNull
    private String cleanEmailCronJob;

    /**
     * Send email to user which was no longer active, cron
     */
    @NotNull
    private String sendEmailToUserWhichWasNoLongerActive;

}
