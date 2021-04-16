package com.vrapalis.www.entryou.apigateway;

import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@EnableDiscoveryClient
@SpringBootApplication
public class ApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }

}

@RestController
@RequestMapping
@AllArgsConstructor
class TmpController {
    private DiscoveryClient discoveryClient;

    @GetMapping
    public void greeting() {
        System.out.println(discoveryClient.getInstances("entryou-uaa").get(0).getUri().toString());
    }
}
