package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserRegistrationCodeEntity;

import java.util.Date;
import java.util.UUID;

public interface OAuth2UserRegistrationCodeService {
    void deleteRegistrationBeforeThan(Date date);

    OAuth2UserRegistrationCodeEntity findByCode(UUID uuid);

    void deleteByUserId(UUID userId);
}
