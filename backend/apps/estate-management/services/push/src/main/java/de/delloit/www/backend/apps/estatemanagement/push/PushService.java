package de.delloit.www.backend.apps.estatemanagement.push;

import de.delloit.www.backend.apps.estatemanagement.push.domain.email.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class PushService {

    public static void main(String[] args) {
        SpringApplication.run(PushService.class, args);
    }

}
