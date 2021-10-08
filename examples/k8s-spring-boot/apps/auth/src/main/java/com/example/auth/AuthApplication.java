package com.example.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableDiscoveryClient
@EnableScheduling
@EnableFeignClients
public class AuthApplication {
    public static void main(String[] args) {
        SpringApplication.run(AuthApplication.class, args);
    }
}

@Configuration
class AuthConfiguration {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@RefreshScope
@Configuration
@ConfigurationProperties(prefix = "bean")
class AuthProps {
    @Builder.Default
    private String message = "Default value";
}

@Component
@FeignClient(name = "user-service")
interface UserServiceApi {
    @RequestMapping(method = RequestMethod.GET, value = "/api/user")
    ResponseEntity<String> getUserInfo();
}
