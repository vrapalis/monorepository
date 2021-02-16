package com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack;

/**
 * Stack interface ADT (Abstract Data Type).
 * A stack is a last in, first out data structure.
 *
 * @author vitali
 */
public interface Stack<T> {
    /**
     * Add element on top of the stack.
     *
     * @param element, which will be add on top of the stack.
     * @throws StackOverOfSpaceException if no space on the stack.
     */
    void push(T element) throws StackOverOfSpaceException;

    /**
     * Remove element on top of the stack.
     *
     * @throws StackOutOfSpaceException, if space is out of the stack (empty stack).
     */
    void pop() throws StackOutOfSpaceException;

    /**
     * @return first element on the stack.
     * @throws StackOutOfSpaceException, if space is out of the stack (empty stack).
     */
    T top() throws StackOutOfSpaceException;

    /**
     * @return true if stack is empty, otherwise false.
     */
    boolean isEmpty();

    /**
     * @return true is stack is full, otherwise false.
     */
    boolean isFull();
}
