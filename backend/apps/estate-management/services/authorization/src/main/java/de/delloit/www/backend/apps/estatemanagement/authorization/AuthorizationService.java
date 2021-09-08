package de.delloit.www.backend.apps.estatemanagement.authorization;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class AuthorizationService {

    public static void main(String[] args) {
        SpringApplication.run(AuthorizationService.class, args);
    }

}

@RefreshScope
@Component
@Data
@NoArgsConstructor
@ConfigurationProperties(prefix = "estate-management.scheduled.fixed-rate")
class TmpProperties {
    private String deletePassword;
}
