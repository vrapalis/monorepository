package com.vrapalis.www.libs.push.repositories.domains.email;

import com.vrapalis.www.libs.push.entities.domains.email.LibsPushEntitiesEmailEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface LibsPushRepositoriesEmailRepository extends PagingAndSortingRepository<LibsPushEntitiesEmailEntity, Integer> {
    List<LibsPushEntitiesEmailEntity> findAll();

    void deleteByCreatedDateIsBefore(Date date);
}
