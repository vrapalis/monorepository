package com.example.app.domain.car;

import reactor.core.publisher.Mono;

public interface CarService {
    Mono<CarDto> findById(Integer id);
}
