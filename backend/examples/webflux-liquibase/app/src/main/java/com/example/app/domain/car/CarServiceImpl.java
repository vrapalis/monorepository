package com.example.app.domain.car;

import lombok.AllArgsConstructor;
import org.springdoc.core.converters.models.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
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

    @Override
    public Mono<Page<CarEntity>> findByName(String name, Pageable pageable) {
        final var pageRequest = PageRequest.of(pageable.getPage(), pageable.getSize());
        return carRepository.findByNameLike(name, pageRequest)
                .collectList()
                .zipWith(carRepository.findByNameLike(name).count())
                .flatMap(entityTuples ->
                        Mono.just(new PageImpl<>(entityTuples.getT1(), pageRequest, entityTuples.getT2())));

//        return carRepository.findByNameLike(name, pageRequest)
//                .map(carEntity -> new CarDto(carEntity.id(), carEntity.name()));
    }

    private CarDto mapToDto(CarEntity carEntity) {
        return new CarDto(carEntity.id(), carEntity.name());
    }
}
