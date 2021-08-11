package de.delloit.www.backend.apps.estatemanagement.authorization;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthorizationService {

    public static void main(String[] args) {
        SpringApplication.run(AuthorizationService.class, args);
    }

}

@RefreshScope
@RestController
class ConfigRestController {

    @Value("${my.prop}")
    private String myProp;

    @GetMapping("/my-prop")
    public ResponseEntity<String> getMyProp() {
        return ResponseEntity.ok(myProp);
    }
}
