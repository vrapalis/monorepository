package com.example.classesandobjects;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Custom stack implementation test")
class CStackImpTest {
    private CStack<String> words;
    private final String FIRST_ITEM = "Airplane";

    @BeforeEach
    void setUp() {
        // Given
        words = new CStackImp<>(3);
        words.push("Car");
        words.push("Ball");

        // FIFO FIRST IN FIRST OUT
        words.push(FIRST_ITEM);
    }

    @Test
    @DisplayName("Push to full stack should throw stack overflow exception")
    void pushToFullStackTest() {
        // When/Then
        Assertions.assertThatThrownBy(() -> this.words.push("Item")).isInstanceOf(CStackOverflowException.class);
    }

    @Test
    @DisplayName("Pop from empty stack should throw stack underflow exception")
    void popFromEmptyStackTest() {
        // When pop elements
        words.pop();
        words.pop();
        words.pop();

        // Then
        Assertions.assertThatThrownBy(() -> words.pop()).isInstanceOf(CStackUnderflowException.class);
    }

    @Test
    @DisplayName("Pop first item test")
    void popFirsItemTest() {
        // When/Then
        Assertions.assertThat(words.pop()).isEqualTo(FIRST_ITEM);
    }
}

interface CStack<T> {
    void push(T item) throws CStackOverflowException;

    T pop() throws CStackUnderflowException;

    boolean isFull();

    boolean isEmpty();
}

class CStackOverflowException extends RuntimeException {
    public CStackOverflowException() {
        super("Stack overflow exception!!!");
    }
}

class CStackUnderflowException extends RuntimeException {
    public CStackUnderflowException() {
        super("Stack underflow exception!!!");
    }
}

class CStackImp<T> implements CStack<T> {
    private T[] items;
    private int counter = -1;

    public CStackImp(int length) {
        this.items = (T[]) new Object[length];
    }

    @Override
    public void push(T item) throws CStackOverflowException {
        if (!isFull()) {
            counter++;
            this.items[counter] = item;
        } else {
            throw new CStackOverflowException();
        }
    }

    @Override
    public T pop() throws CStackUnderflowException {
        if (!isEmpty()) {
            final var item = this.items[counter];
            this.items[counter] = null;
            counter--;
            return item;
        } else {
            throw new CStackUnderflowException();
        }
    }

    @Override
    public boolean isFull() {
        return this.items.length == (counter + 1);
    }

    @Override
    public boolean isEmpty() {
        return -1 == counter;
    }
}