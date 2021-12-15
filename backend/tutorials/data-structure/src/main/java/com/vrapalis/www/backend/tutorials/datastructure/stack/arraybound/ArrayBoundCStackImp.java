package com.vrapalis.www.backend.tutorials.datastructure.stack.arraybound;

import com.vrapalis.www.backend.tutorials.datastructure.stack.CStack;
import com.vrapalis.www.backend.tutorials.datastructure.stack.CStackOverflow;
import com.vrapalis.www.backend.tutorials.datastructure.stack.CStackUnderflow;

@SuppressWarnings("unchecked")
public class ArrayBoundCStackImp<T> implements CStack<T> {
    private final int START_INDEX = -1;
    private final int DEFAULT_SIZE = 100;
    private int index = START_INDEX;
    private final T[] items = (T[]) new Object[DEFAULT_SIZE];

    @Override
    public void push(T item) throws CStackOverflow {
        if (!isFull()) {
            index++;
            items[index] = item;
        } else {
            throw new CStackOverflow();
        }
    }

    @Override
    public T pop() throws CStackUnderflow {
        if (isEmpty()) {
            throw new CStackUnderflow();
        }
        final var item = items[index];
        items[index] = null;
        index--;
        return item;
    }

    @Override
    public boolean isEmpty() {
        return index == START_INDEX;
    }

    @Override
    public boolean isFull() {
        if (!isEmpty()) {
            return items.length == DEFAULT_SIZE - START_INDEX;
        }
        return false;
    }
}
