package com.vrapalis.www.backend.tutorials.datastructure.stack;

public interface CStack<T> {
    void push(T item) throws CStackOverflow;

    T pop() throws CStackUnderflow;

    boolean isEmpty();

    boolean isFull();
}
