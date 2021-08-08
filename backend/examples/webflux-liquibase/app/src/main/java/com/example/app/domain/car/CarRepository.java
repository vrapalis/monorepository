package com.example.app.domain.car;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface CarRepository extends ReactiveSortingRepository<CarEntity, Integer> {
    Flux<CarEntity> findByNameLike(String name, Pageable pageable);
    Flux<CarEntity> findByNameLike(String name);
}
