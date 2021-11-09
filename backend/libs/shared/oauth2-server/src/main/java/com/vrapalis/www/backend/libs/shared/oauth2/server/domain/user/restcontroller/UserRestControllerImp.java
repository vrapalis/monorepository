package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.UserRegistrationDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserRestControllerImp implements UserRestController {

    @Override
    public ResponseEntity<AbstractServerResponseDto> registration(UserRegistrationDto user) {
        return ResponseEntity.ok(new SuccessServerResponseDto("", ""));
    }
}
