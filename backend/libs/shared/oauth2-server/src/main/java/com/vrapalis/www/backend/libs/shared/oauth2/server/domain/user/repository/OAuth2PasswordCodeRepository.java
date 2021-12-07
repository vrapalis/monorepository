package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserPasswordCodeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface OAuth2PasswordCodeRepository extends JpaRepository<OAuth2UserPasswordCodeEntity, UUID> {
}
