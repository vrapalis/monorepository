package com.delloit.www.entryou.checkin.domain.common;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class CommonRestController {

    @GetMapping("greeting")
    public ResponseEntity<String> greeting() {
        return ResponseEntity.ok("Greeting!!!");
    }
}
