package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserRegistrationCodeEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface OAuth2UserRegistrationCodeRepository extends CrudRepository<OAuth2UserRegistrationCodeEntity, UUID> {
    void deleteByCreatedDateBefore(Date date);

    Optional<OAuth2UserRegistrationCodeEntity> findByCode(UUID uuid);
}
