package com.example.app.domain.car;

import lombok.AllArgsConstructor;
import org.springdoc.core.converters.models.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @GetMapping("/byName")
    public Mono<Page<CarEntity>> findByName(@RequestParam String name, Pageable pageable) {
        return carService.findByName(name, pageable);
    }
}
