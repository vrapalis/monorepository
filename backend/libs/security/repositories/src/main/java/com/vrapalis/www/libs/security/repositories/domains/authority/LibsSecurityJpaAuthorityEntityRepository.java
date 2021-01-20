package com.vrapalis.www.libs.security.repositories.domains.authority;

import com.vrapalis.www.libs.security.entities.domains.authority.LibsSecurityJpaAuthorityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibsSecurityJpaAuthorityEntityRepository extends JpaRepository<LibsSecurityJpaAuthorityEntity, Integer> {
}
