package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface OAuth2UserRepository extends JpaRepository<OAuth2UserEntity, UUID> {

    Optional<OAuth2UserEntity> findByEmail(String email);
}
