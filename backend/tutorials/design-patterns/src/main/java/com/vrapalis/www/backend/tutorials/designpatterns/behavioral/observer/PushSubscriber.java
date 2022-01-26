package com.vrapalis.www.backend.tutorials.designpatterns.behavioral.observer;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PushSubscriber<T> implements Subscriber<T> {
    private String name;

    @Override
    public void update(T data) {
        System.out.printf("%s: printed %s", name, data).println();
    }
}
