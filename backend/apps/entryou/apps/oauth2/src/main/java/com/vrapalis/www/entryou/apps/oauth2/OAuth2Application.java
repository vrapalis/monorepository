package com.vrapalis.www.entryou.apps.oauth2;

import com.vrapalis.www.backend.libs.shared.oauth.server.OAuth2Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@OAuth2Server
@SpringBootApplication
public class OAuth2Application {

    public static void main(String[] args) {
        SpringApplication.run(OAuth2Application.class, args);
    }

}

@RestController
@RequestMapping
class TestController {
    @GetMapping("greeting")
    public ResponseEntity<String> greeting() {
        return ResponseEntity.ok("Greeting!!!");
    }
}
