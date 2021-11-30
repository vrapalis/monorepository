package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserRegistrationCodeEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.OAuth2UserRegistrationCodeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.UUID;

@Service
@Transactional
@AllArgsConstructor
public class OAuth2UserRegistrationCodeServiceImpl implements OAuth2UserRegistrationCodeService {
    private OAuth2UserRegistrationCodeRepository repository;

    @Override
    public void deleteRegistrationBeforeThan(Date date) {
        repository.deleteByCreatedDateBefore(date);
    }

    @Override
    public OAuth2UserRegistrationCodeEntity findByCode(UUID uuid) {
        return repository.findByCode(uuid).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public void deleteByUserId(UUID userId) {
        repository.deleteById(userId);
    }
}
