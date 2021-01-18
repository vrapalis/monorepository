package com.vrapalis.www.libs.security.jpa.domains.authority;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibsSecurityJpaAuthorityEntityRepository extends JpaRepository<LibsSecurityJpaAuthorityEntity, Integer> {
}
