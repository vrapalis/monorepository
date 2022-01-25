package com.vrapalis.www.backend.tutorials.designpatterns.behavioral.strategy;

import java.time.OffsetDateTime;
import java.util.function.Predicate;

public class Food extends Product {
    public Food(String name, double price, OffsetDateTime expireDate) {
        super(name, price, expireDate, null, null);
    }
}
