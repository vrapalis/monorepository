package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/users")
@AllArgsConstructor
public class UserRestController {

    @GetMapping("test-api")
    public ResponseEntity<Greeting> testApi(Authentication authentication) {
        return ResponseEntity.ok(new Greeting("Hello " + authentication.getName()));
    }
}

@Data
@AllArgsConstructor
class Greeting {
    private String msg;
}