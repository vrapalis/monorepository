package com.vrapalis.www.libs.security.jpa.domains.role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibsSecurityJpaRoleEntityRepository extends JpaRepository<LibsSecurityJpaRoleEntity, Integer> {
}
