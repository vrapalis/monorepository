package com.example.auth;

import com.example.lib.security.SecurityLib;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class AuthRestController {

    @Value("${example.prop:not set}")
    private String exampleProp;

    @Autowired
    private DiscoveryClient discoveryClient;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private AuthProps authProps;

    @Autowired
    private UserServiceApi userServiceApi;


    @GetMapping("auth")
    public ResponseEntity<String> auth() {
        return ResponseEntity.ok(SecurityLib.getSecurity());
    }

    @GetMapping("env")
    public ResponseEntity<String> env() {
        return ResponseEntity.ok(exampleProp + "/n" + authProps.toString());
    }

    @GetMapping("/clients")
    public ResponseEntity<List<String>> clients() {
        return ResponseEntity.ok(discoveryClient.getServices());
    }

    @GetMapping("/user-call")
    public ResponseEntity<String> userServiceCall() {
        return discoveryClient.getInstances("user-service").stream()
                .findFirst().map(serviceInstance -> {
                    final var responseEntity = restTemplate
                            .getForEntity(serviceInstance.getUri() + "/api/user", String.class);
                    return ResponseEntity.ok(responseEntity.getBody());
                }).orElse(ResponseEntity.ok("No service available"));
    }

    @GetMapping("/feign-user")
    public ResponseEntity<String> feignUser() {
        return userServiceApi.getUserInfo();
    }
}

@Component
class Runner implements CommandLineRunner {
    @Value("${example.prop:not set}")
    private String exampleProp;

    @Override
    public void run(String... args) throws Exception {
        System.out.println(exampleProp);
    }
}
