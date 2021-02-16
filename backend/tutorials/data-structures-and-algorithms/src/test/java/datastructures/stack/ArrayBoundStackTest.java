package datastructures.stack;

import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.ArrayBoundStack;
import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.Stack;
import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.StackOutOfSpaceException;
import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.StackOverOfSpaceException;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 * Test group of {@link ArrayBoundStack}
 */
@DisplayName("Array bound stack test group")
public class ArrayBoundStackTest {
    private Stack<String> stack;

    @BeforeEach
    void setUp() {
        stack = new ArrayBoundStack<String>(3);
    }

    @Test
    @DisplayName("Add element to empty stack test")
    void addElementToEmptyStackTest() {
        // Given single element
        final var element = "Item 1";

        // When add element to stack
        stack.push(element);

        // Then stack should not be empty
        Assertions.assertThat(stack.isEmpty()).isFalse();
    }

    @Test
    @DisplayName("Add element to full stack, should throw exception")
    void addElementToFullStack() {
        // Given full stack
        for (int i = 0; i < 3; i++) {
            stack.push("Item " + i);
        }

        // When add element to full stack
        // Then StackOverOfSpaceException should be thrown
        Assertions.assertThatThrownBy(() -> stack.push("Item 4"))
                .isInstanceOf(StackOverOfSpaceException.class);
    }

    @Test
    @DisplayName("Pop element from empty stack, should throw exception")
    void popElementFromEmptyStack() {
        // Given empty stack
        Assertions.assertThat(stack.isEmpty()).isTrue();

        // When pop element from empty stack
        // Then exception of StackOutOfSpaceException should be thrown
        Assertions.assertThatThrownBy(() -> stack.pop())
                .isInstanceOf(StackOutOfSpaceException.class);
    }
}
