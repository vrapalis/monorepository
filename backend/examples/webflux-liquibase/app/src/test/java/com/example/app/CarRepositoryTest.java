package com.example.app;

import com.example.app.domain.car.CarRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.r2dbc.DataR2dbcTest;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.test.context.ActiveProfiles;
import reactor.test.StepVerifier;

@DataR2dbcTest
@ActiveProfiles("test")
@DisplayName("Car repository test group")
public class CarRepositoryTest {
    @Autowired
    private DatabaseClient databaseClient;

    @Autowired
    private CarRepository carRepository;

    @Test
    @DisplayName("Insert car to database table, check inserted car have to exists")
    void insertCarTest() {
        final var CAR_NAME = "AUDI A3";

        databaseClient
                .sql("INSERT INTO cars (name) VALUES (:name)")
                .bind("name", CAR_NAME)
                .fetch()
                .one()
                .block();

        carRepository.findByName(CAR_NAME)
                .map(carEntity -> carEntity.name())
                .as(StepVerifier::create)
                .expectNext(CAR_NAME)
                .verifyComplete();
    }
}
