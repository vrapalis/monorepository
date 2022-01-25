package com.example.classesandobjects;

public abstract class Parent {
    protected String name;

    protected Parent(String name) {
        this.name = name;
    };

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
