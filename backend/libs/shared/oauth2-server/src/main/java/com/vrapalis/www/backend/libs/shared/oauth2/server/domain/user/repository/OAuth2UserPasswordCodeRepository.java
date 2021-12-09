package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserPasswordCodeEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface OAuth2UserPasswordCodeRepository extends CrudRepository<OAuth2UserPasswordCodeEntity, UUID> {

    void deleteByCreatedDateBefore(Date date);

    Optional<OAuth2UserPasswordCodeEntity> findByCode(UUID code);

    List<OAuth2UserPasswordCodeEntity> findAllByCreatedDateBefore(Date date);
}
