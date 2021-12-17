package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.restcontroller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.dto.ClientRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.service.OAuth2ClientService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class OAuthClientRestControllerImpl implements OAuth2ClientRestController {

    private OAuth2ClientService clientService;

    @Override
    public ResponseEntity<List<ClientRegistrationDto>> getClients() {
        return clientService.findAllClients();
    }
}
