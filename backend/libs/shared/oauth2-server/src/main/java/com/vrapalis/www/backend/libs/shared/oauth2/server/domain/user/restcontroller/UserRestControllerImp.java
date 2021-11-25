package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationExceptionDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserService;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserRestControllerImp implements OAuth2UserRestController {

    private OAuth2UserService userService;

    @Override
    public ResponseEntity<AbstractServerResponseDto> registration(OAuth2UserRegistrationExceptionDto user) {
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
