package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.UserRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.UserService;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class UserRestControllerImp implements UserRestController {

    private UserService userService;

    @Override
    public ResponseEntity<AbstractServerResponseDto> registration(UserRegistrationDto user) {
        return userService.registration(user);
    }

    @GetMapping("security-test")
    public ResponseEntity<SecurityTestResponse> securityTest() {
        return ResponseEntity.ok(new SecurityTestResponse("Security test method"));
    }
}

@Data
@NoArgsConstructor
@AllArgsConstructor
class SecurityTestResponse {
    private String name;
}
