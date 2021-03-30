package com.vrapalis.www.entryou.entry.domain.checkout.repositories;

import com.vrapalis.www.entryou.entry.domain.checkout.CheckOutEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckOutRepository extends JpaRepository<CheckOutEntity, Integer> {
}
