package com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack;

import java.util.Arrays;
import java.util.Objects;

public class ArrayBoundStack<T> implements Stack<T> {
    private final T[] stack;
    private int elementIndex = -1;

    @SuppressWarnings("unchecked")
    public ArrayBoundStack() {
        int DEFAULT_SIZE = 100;
        stack = (T[]) new Object[DEFAULT_SIZE];
    }

    @SuppressWarnings("unchecked")
    public ArrayBoundStack(int size) {
        stack = (T[]) new Object[size];
    }

    @Override
    public void push(T element) throws StackOverOfSpaceException {
        if (element == null) {
            throw new IllegalArgumentException();
        }

        if (isFull()) {
            throw new StackOverOfSpaceException();
        }

        elementIndex++;
        stack[this.elementIndex] = element;
    }

    @Override
    public void pop() throws StackOutOfSpaceException {
        if (isEmpty()) {
            throw new StackOutOfSpaceException();
        }

        stack[this.elementIndex] = null;
        elementIndex--;
    }

    @Override
    public T top() throws StackOutOfSpaceException {
        if (isEmpty()) {
            throw new StackOutOfSpaceException();
        }

        return stack[this.elementIndex];
    }

    @Override
    public boolean isEmpty() {
        return elementIndex == -1;
    }

    @Override
    public boolean isFull() {
        return elementIndex == this.stack.length -1;
    }

    @Override
    public String toString() {
        return "ArrayStack{" +
                "stack=" + Arrays.toString(stack) +
                '}';
    }
}
