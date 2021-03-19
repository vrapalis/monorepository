package com.vrapalis.www.entryou.entry.domain.checkin.repositories;

import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInIdEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckInRepository extends JpaRepository<CheckInEntity, CheckInIdEntity> {
}
