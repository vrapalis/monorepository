package com.vrapalis.www.backend.tutorials.designpatterns.behavioral.observer;

public interface Subscriber<T> {
    void update(T data);
}
