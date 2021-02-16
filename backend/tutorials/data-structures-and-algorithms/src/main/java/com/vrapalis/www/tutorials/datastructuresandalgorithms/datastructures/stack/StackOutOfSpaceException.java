package com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack;

/**
 * Stack out of the space exception.
 *
 * @author vitali
 */
public class StackOutOfSpaceException extends RuntimeException {
    private static final String ERROR_MSG = "Stack out of space!!!";

    public StackOutOfSpaceException() {
        super(ERROR_MSG);
    }
}
