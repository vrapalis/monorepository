package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationExceptionDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.util.OAuth2UserApiUrl;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;


@RequestMapping(OAuth2UserApiUrl.USER_BASE_URL)
public interface OAuth2UserRestController {

    @PostMapping(OAuth2UserApiUrl.USER_REGISTRATION_URL)
    ResponseEntity<AbstractServerResponseDto> registration(@Valid @RequestBody OAuth2UserRegistrationExceptionDto user);

}
