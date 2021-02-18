package com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack;

public class LinkNode<T> {
    private final T value;
    private LinkNode<T> link;

    public LinkNode(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }

    public LinkNode<T> getLink() {
        return link;
    }

    public void setLink(LinkNode<T> link) {
        this.link = link;
    }
}
