package com.example.app.domain.car;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
@AllArgsConstructor
public class CarServiceImpl implements CarService {
    private CarRepository carRepository;

    @Override
    public Mono<CarDto> findById(Integer id) {
        return carRepository.findById(id).map(this::mapToDto);
    }

    private CarDto mapToDto(CarEntity carEntity) {
        return new CarDto(carEntity.id(), carEntity.name());
    }
}
