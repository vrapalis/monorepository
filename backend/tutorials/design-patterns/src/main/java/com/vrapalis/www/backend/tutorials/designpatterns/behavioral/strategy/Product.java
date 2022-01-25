package com.vrapalis.www.backend.tutorials.designpatterns.behavioral.strategy;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.OffsetDateTime;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

@Data
@AllArgsConstructor
public abstract class Product {
    private final String name;
    private final double price;
    private final OffsetDateTime expireDate;

    /**
     * Encapsulated behavior. Group of encapsulated algorithms.
     * Prefer composition over the inheritance.
     * Program to interface.
     */
    private Predicate<Product> filterPredicate;
    private Function<Product, String> print;

    public boolean applyFilter() {
        return this.filterPredicate.test(this);
    }

    public String applyPrint() {
        return print.apply(this);
    }
}
