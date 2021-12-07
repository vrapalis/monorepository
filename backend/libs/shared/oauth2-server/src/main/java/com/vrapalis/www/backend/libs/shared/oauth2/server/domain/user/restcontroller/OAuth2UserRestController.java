package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2RegistrationCodeException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.error.OAuth2RegistrationException;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationCodeDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.OAuth2UserApiUrl;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import de.delloit.www.backend.libs.shared.error.domain.common.PasswordIsNotSameSharedError;
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
                                                           HttpServletRequest request)
            throws OAuth2RegistrationException;

    @PutMapping(OAuth2UserApiUrl.USER_REGISTRATION_URL)
    ResponseEntity<AbstractServerResponseDto> registrationCode(@Valid @RequestBody OAuth2UserRegistrationCodeDto code,
                                                           BindingResult bindingResult, HttpServletResponse response,
                                                           HttpServletRequest request)
            throws OAuth2RegistrationCodeException;

}
