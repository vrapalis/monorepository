package com.vrapalis.www.entryou.uaa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class UaaApplication {

    public static void main(String[] args) {
        SpringApplication.run(UaaApplication.class, args);
    }

}

@RestController
@RequestMapping("api/greeting")
class GreetingRestEndpoint {
    @GetMapping
    public ResponseEntity<String> greeting() {
        return ResponseEntity.ok("Hallo World!!!");
    }
}


