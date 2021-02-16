package com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack;

public class RunArrayBoundStack {
    public static void main(String[] args) {
        Stack<String> stack = new ArrayBoundStack<String>(5);

        for (int i = 0; i < 3; i++) {
            stack.push("Item " + i);
        }

        System.out.println("Given stack: "+ stack.toString());
        System.out.println("");

        while (!stack.isEmpty()) {
            System.out.println("Pop item:");
            final var top = stack.top();
            System.out.println(top);
            System.out.println("");
            stack.pop();
        }

        System.out.println("Stack after pop all items:");
        System.out.println(stack);
    }
}
