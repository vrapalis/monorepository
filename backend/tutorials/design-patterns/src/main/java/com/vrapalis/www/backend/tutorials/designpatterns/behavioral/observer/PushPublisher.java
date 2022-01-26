package com.vrapalis.www.backend.tutorials.designpatterns.behavioral.observer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PushPublisher<T> implements Publisher<T> {
    private T data;
    private List<Subscriber<T>> subscribers = new ArrayList<>();

    @Override
    public void subscribe(Subscriber<T> subscriber) {
        subscribers.add(subscriber);
    }

    @Override
    public void subscribes(Subscriber<T>... subscriber) {
        Arrays.stream(subscriber).forEach(subscribers::add);
    }

    @Override
    public void unSubscribe(Subscriber<T> subscriber) {
        subscribers.remove(subscriber);
    }

    @Override
    public void notifySubscriber() {
        for (Subscriber subscriber : subscribers) {
            subscriber.update(data);
        }
    }

    @Override
    public void setData(T data) {
        this.data = data;
        notifySubscriber();
    }
}
