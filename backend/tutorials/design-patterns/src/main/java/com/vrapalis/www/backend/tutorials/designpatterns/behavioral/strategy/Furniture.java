package com.vrapalis.www.backend.tutorials.designpatterns.behavioral.strategy;

import java.time.OffsetDateTime;
import java.util.function.Predicate;

public class Furniture extends Product {
    public Furniture(String name, double price, OffsetDateTime expireDate) {
        super(name, price, expireDate, null, null);
    }
}
