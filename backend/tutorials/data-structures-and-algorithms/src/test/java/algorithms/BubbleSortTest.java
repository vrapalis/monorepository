package algorithms;

import com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.sort.BubbleSort;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 * Bubble sort test
 *
 * @author vitali
 */
public class BubbleSortTest {
    private int[] unSortArray;

    @BeforeEach
    void setUp() {
        unSortArray = new int[]{9, 8, 7, 6, 5, 4, 3, 2, 1, 0};
    }

    @Test
    @DisplayName("Bubble sort test")
    void bubbleSortTest() {
        // Given un sort array
        Assertions.assertThat(unSortArray).hasSizeGreaterThan(1);
        Assertions.assertThat(unSortArray[0]).isGreaterThan(0);

        // When apply bubble sort
        new BubbleSort(unSortArray).sort();

        // Then array should be sorted and first item should be 0 and last 9
        Assertions.assertThat(unSortArray[0]).isEqualTo(0);
        Assertions.assertThat(unSortArray[unSortArray.length - 1]).isEqualTo(9);
    }
}
