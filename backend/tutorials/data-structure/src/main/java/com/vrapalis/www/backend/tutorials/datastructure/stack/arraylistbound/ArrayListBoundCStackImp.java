package com.vrapalis.www.backend.tutorials.datastructure.stack.arraylistbound;

import com.vrapalis.www.backend.tutorials.datastructure.stack.CStack;
import com.vrapalis.www.backend.tutorials.datastructure.stack.CStackOverflow;
import com.vrapalis.www.backend.tutorials.datastructure.stack.CStackUnderflow;

import java.util.ArrayList;
import java.util.List;

public final class ArrayListBoundCStackImp<T> implements CStack<T> {
    private final List<T> items;

    public ArrayListBoundCStackImp() {
        this.items = new ArrayList<>();
    }

    @Override
    public void push(T item) throws CStackOverflow {
        items.add(item);
    }

    @Override
    public T pop() throws CStackUnderflow {
        if (isEmpty()) {
            throw new CStackUnderflow();
        }
        return items.remove(items.size() - 1);
    }

    @Override
    public boolean isEmpty() {
        return items.size() == 0;
    }

    @Override
    public boolean isFull() {
        return false;
    }
}
