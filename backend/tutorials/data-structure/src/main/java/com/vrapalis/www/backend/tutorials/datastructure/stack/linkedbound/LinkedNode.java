package com.vrapalis.www.backend.tutorials.datastructure.stack.linkedbound;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class LinkedNode<T> {
    private final T value;
    private LinkedNode<T> link;
}
