package com.example.security.domain.user.restcontroller;

import com.example.security.domain.user.entity.UserEntity;
import com.example.security.domain.user.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("api/users")
public class UserRestController {
    private UserService userService;

    @GetMapping({"", "/{id}"})
    public ResponseEntity<List<UserEntity>> getUsers(@PathVariable Optional<Integer> id) {
        return userService.getUsers(id);
    }

}
