package com.vrapalis.www.libs.security.repositories.domains.user;

import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserConfirmEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface LibsSecurityJpaUserConfirmEntityRepository extends CrudRepository<LibsSecurityJpaUserConfirmEntity, UUID> {
    @Query(value = "SELECT app_user_id FROM app_user_confirm WHERE id=?1", nativeQuery = true)
    Optional<Integer> findUserIdByConfirmId(UUID id);
}
