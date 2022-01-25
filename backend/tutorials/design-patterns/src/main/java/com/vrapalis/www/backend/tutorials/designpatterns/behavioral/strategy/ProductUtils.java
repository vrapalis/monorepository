package com.vrapalis.www.backend.tutorials.designpatterns.behavioral.strategy;

import lombok.experimental.UtilityClass;

import java.util.List;
import java.util.stream.Collectors;

@UtilityClass
public class ProductUtils {

    public List<Product> filter(List<Product> sortList) {
        return sortList.stream().filter(Product::applyFilter).collect(Collectors.toList());
    }

    public List<String> printList(List<Product> printedProducts) {
        return printedProducts.stream().map(Product::applyPrint).collect(Collectors.toList());
    }
}
