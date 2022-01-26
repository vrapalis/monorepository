package com.vrapalis.www.backend.tutorials.designpatterns.behavioral.observer;

public interface Publisher<T> {
    void subscribe(Subscriber<T> subscriber);

    void subscribes(Subscriber<T>... subscriber);

    void unSubscribe(Subscriber<T> subscriber);

    void notifySubscriber();

    void setData(T data);
}
