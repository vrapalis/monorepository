package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tests")
public class TestRestController {
    @GetMapping
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Hello World!!!");
    }
}
