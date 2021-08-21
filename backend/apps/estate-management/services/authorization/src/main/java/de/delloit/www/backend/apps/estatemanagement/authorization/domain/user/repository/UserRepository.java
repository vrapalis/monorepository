package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.repository;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, UUID> {
    Optional<UserEntity> findByMobilePhone(String mobilePhone);
}
