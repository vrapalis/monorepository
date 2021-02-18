package com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack;

/**
 * Linked stack implementation based on reference.
 *
 * @author vitali
 * @param <T>
 */
public class LinkedStack<T> implements Stack<T> {
    private LinkNode<T> top;

    public LinkedStack() {
    }

    public LinkedStack(LinkNode<T> top) {
        this.top = top;
    }

    @Override
    public void push(T element) throws StackOverOfSpaceException {
        final var newNode = new LinkNode<T>(element);
        newNode.setLink(top);
        top = newNode;
    }

    @Override
    public void pop() throws StackOutOfSpaceException {
        if (isEmpty()) {
            throw new StackOutOfSpaceException();
        } else {
            top = top.getLink();
        }
    }

    @Override
    public T top() throws StackOutOfSpaceException {
        if (isEmpty()) {
            throw new StackOutOfSpaceException();
        } else {
            return top.getValue();
        }
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
