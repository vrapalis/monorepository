package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.properties.OAuth2ClientRegistrationProperties;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.dto.ClientRegistrationDto;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.StreamSupport;

@Log4j2
@Service
@Transactional
@AllArgsConstructor
public class OAuth2ClientServiceImpl implements OAuth2ClientService {

    private InMemoryClientRegistrationRepository inMemoryClRepository;
    private OAuth2ClientRegistrationProperties properties;

    @Override
    public ResponseEntity<List<ClientRegistrationDto>> findAllClients() {
        final var clients = StreamSupport
                .stream(inMemoryClRepository.spliterator(), false)
                .map(ClientRegistration::getRegistrationId)
                .map(String::toLowerCase)
                .map(cl -> new ClientRegistrationDto(cl, properties.getClasses().get(cl)))
                .toList();

        return ResponseEntity.ok(clients);
    }
}
