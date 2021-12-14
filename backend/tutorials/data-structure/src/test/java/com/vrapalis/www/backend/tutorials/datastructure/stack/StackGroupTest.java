package com.vrapalis.www.backend.tutorials.datastructure.stack;

import com.vrapalis.www.backend.tutorials.datastructure.stack.arraybound.ArrayBoundCStackImp;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

@DisplayName("Stack test group")
public class StackGroupTest {
    private CStack<String> stack;

    @BeforeEach
    void setUp() {
        stack = null;
    }

    @Nested
    @DisplayName("Array bound stack test group")
    class ArrayBoundStackTest implements AbstractStackTest {

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
            final var popItem= stack.pop();

            // Then
            Assertions.assertThat(item).isEqualTo(popItem);
            Assertions.assertThat(stack.isEmpty()).isTrue();
        }
    }
}
