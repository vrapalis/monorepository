package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.client.dto;

import java.util.List;

public record ClientRegistrationDto(String registrationId, List<String> classes) {
}
