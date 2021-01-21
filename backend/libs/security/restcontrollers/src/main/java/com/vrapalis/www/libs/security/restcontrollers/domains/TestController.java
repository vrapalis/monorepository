package com.vrapalis.www.libs.security.restcontrollers.domains;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class TestController {
    @GetMapping(value = "/greeting")
    public ResponseEntity<String> greeting() {
        return ResponseEntity.ok("Greeting!!!");
    }
}
