package com.example.app.domain.car;

import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface CarRepository extends ReactiveSortingRepository<CarEntity, Integer> {
    Mono<CarEntity> findByName(String name);
}
