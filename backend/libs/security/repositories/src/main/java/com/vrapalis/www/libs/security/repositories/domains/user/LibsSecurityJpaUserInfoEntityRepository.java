package com.vrapalis.www.libs.security.repositories.domains.user;

import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibsSecurityJpaUserInfoEntityRepository extends JpaRepository<LibsSecurityJpaUserInfoEntity, Integer> {
}
