package datastructures.stack;

import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.LinkedStack;
import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.Stack;
import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.StackOutOfSpaceException;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Linked stack group tests")
public class LinkedStackTest {
    private Stack<String> stack;

    @BeforeEach
    void setUp() {
        stack = new LinkedStack<String>();
    }

    @Test
    @DisplayName("Push item to the empty stack, after push stack should contain item")
    void pushItemToTheEmptyStackTest() {
        // Given empty stack
        Assertions.assertThat(stack.isEmpty()).isTrue();

        // When push item to the stack
        stack.push("Ball");

        // Then stack should contain pushed item
        Assertions.assertThat(stack.isEmpty()).isFalse();
        Assertions.assertThat(stack.top()).isEqualTo("Ball");
    }

    @Test
    @DisplayName("Push item to not empty stack, push item should be on the top of the stack")
    void pushItemToNotEmptyStackTest() {
        // Given not empty stack
        stack.push("Ball");
        Assertions.assertThat(stack.isEmpty()).isFalse();

        // When push new item to stack
        stack.push("Car");

        // Then new push item should be on the top of the stack (first in last out)
        Assertions.assertThat(stack.top()).isEqualTo("Car");
    }

    @Test
    @DisplayName("Pop item from the empty stack should throw exception")
    void popItemFromEmptyStackShouldThrowExceptionTest() {
        // Given empty stack
        Assertions.assertThat(stack.isEmpty()).isTrue();

        // When pop item, then exception should be thrown
        Assertions.assertThatThrownBy(() -> stack.pop()).isInstanceOf(StackOutOfSpaceException.class);
    }

    @Test
    @DisplayName("Pop item from not empty stack, previous item should be on the stack")
    void popItemFromNotEmptyStackTest() {
        // Given not empty stack
        stack.push("Ball");
        stack.push("Car");
        Assertions.assertThat(stack.isEmpty()).isFalse();

        // When pop top item from the stack
        stack.pop();

        // Then last item should be Ball in the stack
        Assertions.assertThat(stack.top()).isEqualTo("Ball");
    }
}
