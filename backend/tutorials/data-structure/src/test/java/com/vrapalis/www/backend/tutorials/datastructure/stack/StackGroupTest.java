package com.vrapalis.www.backend.tutorials.datastructure.stack;

import com.vrapalis.www.backend.tutorials.datastructure.stack.arraybound.ArrayBoundCStackImp;
import com.vrapalis.www.backend.tutorials.datastructure.stack.arraylistbound.ArrayListBoundCStackImp;
import com.vrapalis.www.backend.tutorials.datastructure.stack.linkedbound.LinkedBoundCStackImp;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

@DisplayName("Stack test group")
public class StackGroupTest {
    private CStack<String> stack;

    @BeforeEach
    void setUp() {
        stack = null;
    }

    @Nested
    @DisplayName("Array bound stack test group")
    class ArrayBoundStackGroupTest implements AbstractStackTest {

        @BeforeEach
        void setUp() {
            stack = new ArrayBoundCStackImp<>();
        }

        @Test
        @DisplayName("After init reference should be not null")
        void initStack() {
            Assertions.assertThat(stack).isNotNull();
        }

        @Test
        @Override
        @DisplayName("Push item to the stack, after push the stack shouldn be empty")
        public void push() {
            // Given
            final var item = "item1";

            // When
            stack.push(item);

            // Then
            Assertions.assertThat(stack.isEmpty()).isFalse();
        }

        @Test
        @Override
        @DisplayName("Pop item from the stack, after pop the stack should be empty")
        public void pop() {
            // Given
            final var item = "Item1";

            // When
            stack.push(item);
            final var popItem = stack.pop();

            // Then
            Assertions.assertThat(item).isEqualTo(popItem);
            Assertions.assertThat(stack.isEmpty()).isTrue();
        }

    }

    @Nested
    @DisplayName("Array list stack implementation test group")
    class ArrayListBoundStackGroupTest implements AbstractStackTest {
        private CStack<String> stack;
        private final String ball = "Ball";

        @BeforeEach
        void setUp() {
            // Given
            stack = new ArrayListBoundCStackImp<>();
        }

        @Test
        @Override
        @DisplayName("Push item to the stack test")
        public void push() {
            // When push item to the stack
            stack.push(ball);

            // Then stack should not be empty
            Assertions.assertThat(stack.isEmpty()).isFalse();
        }

        @Test
        @Override
        @DisplayName("Pop item from the stack test")
        public void pop() {
            // When pop the item from the stack
            stack.push(ball);
            final var ball = stack.pop();

            // Then
            Assertions.assertThat(ball).isEqualTo(ball);
            Assertions.assertThat(stack.isEmpty()).isTrue();
        }
    }

    @Nested
    @DisplayName("Linked based stack group test")
    class LinkedBasedCStackGroupTest implements AbstractStackTest {
        private CStack<String> stack;
        private final String item = "Item";

        @BeforeEach
        void setUp() {
            // Given
            stack = new LinkedBoundCStackImp<>();
        }

        @Test
        @Override
        @DisplayName("Push item to the stack")
        public void push() {
            // When
            stack.push(item);

            // Then
            Assertions.assertThat(stack.isEmpty()).isFalse();
        }

        @Test
        @Override
        @DisplayName("Pop item from the stack")
        public void pop() {
            // When
            stack.push(item);

            // Then
            Assertions.assertThat(stack.pop()).isEqualTo(item);
            Assertions.assertThat(stack.isEmpty()).isTrue();
        }

        @Test
        @DisplayName("Print items in order of the stack test")
        void printLinkedStackTest() {
            // When
            stack.push("Item1");
            stack.push("Item2");
            stack.push("Item3");

            // Then
            while (!stack.isEmpty()) {
                final var item = stack.pop();
                System.out.println("Item value: " + item);
                Assertions.assertThat(item).contains("Item");
            }
        }
    }
}
