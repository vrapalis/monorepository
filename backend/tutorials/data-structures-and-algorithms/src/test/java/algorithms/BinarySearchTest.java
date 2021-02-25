package algorithms;

import com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.search.BinarySearch;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

@DisplayName("Binary sort tests group")
public class BinarySearchTest {
    private Integer[] givenArray = {9, 8, 7, 4, 5, 3, 2, 1, 0};

    @BeforeEach
    void setUp() {
        Arrays.sort(givenArray);
    }

    @Test
    @DisplayName("Binary search test")
    void binarySearchTest() {
        // Given sort array
        Assertions.assertThat(givenArray[givenArray.length - 1]).isEqualTo(9);
        Assertions.assertThat(givenArray[0]).isEqualTo(0);

        // When BinarySearch search method is called with element in the array
        // Then true should be returned, otherwise false
        Assertions.assertThat(BinarySearch.recursiveSearch(1, givenArray, 0, givenArray.length - 1))
                .isTrue();
        Assertions.assertThat(BinarySearch.recursiveSearch(6, givenArray, 0, givenArray.length - 1))
                .isFalse();
    }
}
