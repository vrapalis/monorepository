package com.vrapalis.www.libs.security.repositories.domains.organization;

import com.vrapalis.www.libs.security.entities.domains.organization.LibsSecurityJpaUserOrganizationType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LibsSecurityJpaOrganizationTypeRepository extends JpaRepository<LibsSecurityJpaUserOrganizationType, Integer> {
    Optional<LibsSecurityJpaUserOrganizationType> findByName(String name);
}
