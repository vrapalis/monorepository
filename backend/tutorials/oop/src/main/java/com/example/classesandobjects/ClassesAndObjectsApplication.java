package com.example.classesandobjects;


import lombok.experimental.UtilityClass;

import java.util.Scanner;
import java.util.Stack;

public class ClassesAndObjectsApplication {
    public static void main(String[] args) {
        RunCStackDemo.run();
    }
}

@UtilityClass
class RunCStackDemo {

    public void run() {
        String word = "";
        Stack<String> stack;
        final var scanner = new Scanner(System.in);

        while (!word.equals("exit")) {
            System.out.println("Write a word, which will be reverted");

            word = scanner.nextLine();
            stack = new Stack<>();

            if(word.equals("exit")) {
                System.out.println("Good by!!!");
                return;
            }

            for (String ch : word.split("")) {
                stack.push(ch);
            }

            while (!stack.isEmpty()) {
                System.out.println(stack.pop());
            }
        }
    }
}