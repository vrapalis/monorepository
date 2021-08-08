package com.example.app.domain.car;

import org.springdoc.core.converters.models.Pageable;
import org.springframework.data.domain.Page;
import reactor.core.publisher.Mono;

public interface CarService {
    Mono<CarDto> findById(Integer id);

    Mono<Page<CarEntity>> findByName(String name, Pageable pageable);
}
