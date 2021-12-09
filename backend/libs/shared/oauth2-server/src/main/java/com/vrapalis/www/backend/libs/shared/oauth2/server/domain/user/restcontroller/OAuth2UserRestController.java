package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserForgotPasswordDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationCodeDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserResetPasswordDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.OAuth2UserApiUrl;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;


@RequestMapping(OAuth2UserApiUrl.USER_BASE_URL)
public interface OAuth2UserRestController {

    @PostMapping(OAuth2UserApiUrl.USER_REGISTRATION_URL)
    ResponseEntity<AbstractServerResponseDto> registration(@Valid @RequestBody OAuth2UserRegistrationDto user,
                                                           BindingResult bindingResult, HttpServletResponse response,
                                                           HttpServletRequest request);

    @PutMapping(OAuth2UserApiUrl.USER_REGISTRATION_URL)
    ResponseEntity<AbstractServerResponseDto> registrationCode(@Valid @RequestBody OAuth2UserRegistrationCodeDto code,
                                                           BindingResult bindingResult, HttpServletResponse response,
                                                           HttpServletRequest request);

    @PostMapping(OAuth2UserApiUrl.USER_FORGOT_PASSWORD_URL)
    ResponseEntity<AbstractServerResponseDto> forgotPassword(@Valid @RequestBody OAuth2UserForgotPasswordDto dto,
                                                               BindingResult bindingResult, HttpServletResponse response,
                                                               HttpServletRequest request);

    @PutMapping(OAuth2UserApiUrl.USER_RESET_PASSWORD_URL)
    ResponseEntity<AbstractServerResponseDto> resetPassword(@Valid @RequestBody OAuth2UserResetPasswordDto dto,
                                                             BindingResult bindingResult, HttpServletResponse response,
                                                             HttpServletRequest request);

}
