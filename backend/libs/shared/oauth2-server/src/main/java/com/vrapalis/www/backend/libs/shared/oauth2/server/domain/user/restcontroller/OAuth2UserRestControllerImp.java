package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserForgotPasswordDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationCodeDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserResetPasswordDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service.OAuth2UserService;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@AllArgsConstructor
public class OAuth2UserRestControllerImp implements OAuth2UserRestController {

    private OAuth2UserService userService;

    @Override
    public ResponseEntity<AbstractServerResponseDto> registration(OAuth2UserRegistrationDto user,
                                                                  BindingResult bindingResult,
                                                                  HttpServletResponse response,
                                                                  HttpServletRequest request) {
        return userService.registration(user, bindingResult, response, request);
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> registrationCode(OAuth2UserRegistrationCodeDto code,
                                                                      BindingResult bindingResult,
                                                                      HttpServletResponse response,
                                                                      HttpServletRequest request) {
        return userService.registrationCode(code, bindingResult, response, request);
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> forgotPassword(OAuth2UserForgotPasswordDto dto,
                                                                    BindingResult bindingResult,
                                                                    HttpServletResponse response,
                                                                    HttpServletRequest request) {
        return userService.forgotPassword(dto, bindingResult, response, request);
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> resetPassword(OAuth2UserResetPasswordDto dto,
                                                                   BindingResult bindingResult,
                                                                   HttpServletResponse response,
                                                                   HttpServletRequest request) {
        return userService.resetPassword(dto, bindingResult, response, request);
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
