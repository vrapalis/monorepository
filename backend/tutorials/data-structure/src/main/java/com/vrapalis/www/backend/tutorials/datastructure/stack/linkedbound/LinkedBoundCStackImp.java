package com.vrapalis.www.backend.tutorials.datastructure.stack.linkedbound;

import com.vrapalis.www.backend.tutorials.datastructure.stack.CStack;
import com.vrapalis.www.backend.tutorials.datastructure.stack.CStackOverflow;
import com.vrapalis.www.backend.tutorials.datastructure.stack.CStackUnderflow;

public class LinkedBoundCStackImp<T> implements CStack<T> {
    private LinkedNode<T> top;

    @Override
    public void push(T item) throws CStackOverflow {
        final var newNode = new LinkedNode<T>(item);
        newNode.setLink(top);
        top = newNode;
    }

    @Override
    public T pop() throws CStackUnderflow {
        if (isEmpty()) {
            throw new CStackUnderflow();
        }
        final var link = top.getLink();
        final var value = top.getValue();
        top.setLink(null);
        top = link;
        return value;
    }

    @Override
    public boolean isEmpty() {
        return top == null;
    }

    @Override
    public boolean isFull() {
        return false;
    }
}
