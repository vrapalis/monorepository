package com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack;

/**
 * Stack over of size limit exception.
 */
public class StackOverOfSpaceException extends RuntimeException {
    private final static String ERROR_MSG = "Stack over off space!!!";

    public StackOverOfSpaceException() {
        super(ERROR_MSG);
    }
}
