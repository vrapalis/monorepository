package com.vrapalis.www.libs.security.jpa.domains.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibsSecurityJpaUserEntityRepository extends JpaRepository<LibsSecurityJpaUserEntity, Integer> {
}
