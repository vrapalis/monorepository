package com.vrapalis.www.backend.tutorials.datastructure.stack.arraybound;

public class MainArrayBoundCStackImp {

    public static void main(String[] args) {
        System.out.println("--- Array Bound Stack ---");

        final var stack = new ArrayBoundCStackImp<String>();
        stack.push("Item1");
        stack.push("Item2");
        stack.push("Item3");

        System.out.println("Traverse stack");
        while (!stack.isEmpty()) {
            System.out.println(stack.pop());
        }

        System.out.println("--- Array Bound Stack End ---");
    }
}
