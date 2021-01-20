package com.vrapalis.www.libs.security.repositories.domains.role;

import com.vrapalis.www.libs.security.entities.domains.role.LibsSecurityJpaRoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibsSecurityJpaRoleEntityRepository extends JpaRepository<LibsSecurityJpaRoleEntity, Integer> {
}
