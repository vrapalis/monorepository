package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserPasswordCodeEntity;

import java.util.Date;
import java.util.UUID;

public interface OAuth2UserPasswordCodeService {

    void deletePasswordBeforeThan(Date date);

    OAuth2UserPasswordCodeEntity findByCode(UUID userId);

    void deleteByUserId(UUID id);
}
