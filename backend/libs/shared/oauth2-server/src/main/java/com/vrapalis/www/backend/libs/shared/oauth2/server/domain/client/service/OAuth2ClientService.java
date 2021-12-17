package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.dto.ClientRegistrationDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface OAuth2ClientService {

    ResponseEntity<List<ClientRegistrationDto>> findAllClients();
}
