package de.delloit.www.backend.apps.estatemanagement.push;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication(exclude = UserDetailsServiceAutoConfiguration.class)
public class PushService {

    public static void main(String[] args) {
        SpringApplication.run(PushService.class, args);
    }

}
