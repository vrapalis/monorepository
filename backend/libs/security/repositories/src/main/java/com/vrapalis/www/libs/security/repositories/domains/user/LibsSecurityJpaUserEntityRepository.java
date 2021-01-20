package com.vrapalis.www.libs.security.repositories.domains.user;

import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibsSecurityJpaUserEntityRepository extends JpaRepository<LibsSecurityJpaUserEntity, Integer> {
}
