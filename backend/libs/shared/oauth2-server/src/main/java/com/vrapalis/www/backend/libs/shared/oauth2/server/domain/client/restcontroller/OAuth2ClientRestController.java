package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.dto.ClientRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.url.OAuth2ClientApiUrl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping(OAuth2ClientApiUrl.CLIENT_BASE_URL)
public interface OAuth2ClientRestController {

    @GetMapping(OAuth2ClientApiUrl.CLIENT_PROVIDER_URL)
    ResponseEntity<List<ClientRegistrationDto>> getClients();
}
