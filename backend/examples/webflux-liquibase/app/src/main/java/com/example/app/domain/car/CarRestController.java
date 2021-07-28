package com.example.app.domain.car;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@AllArgsConstructor
@RequestMapping("/api/cars")
public class CarRestController {
    private CarService carService;

    @GetMapping("/{id}")
    public Mono<ResponseEntity<CarDto>> findById(@PathVariable Integer id) {
        return carService.findById(id).map(carDto -> ResponseEntity.ok(carDto))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}
