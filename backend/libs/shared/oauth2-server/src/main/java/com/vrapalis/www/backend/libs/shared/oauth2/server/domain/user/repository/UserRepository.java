package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends PagingAndSortingRepository<UserEntity, UUID> {

    Optional<UserEntity> findByEmail(String email);
}
