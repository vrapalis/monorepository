package algorithms;

import com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.sort.SelectSort;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Select sort test")
public class SelectSortTest {
    Integer[] unsortedArray = {9, 7, 8, 7, 6, 10};

    @Test
    @DisplayName("Sort array test")
    void selectSortTest() {
        // When select sort is applied, array should be stored by asc
        SelectSort.sort(unsortedArray);

        // Then assert that last item in array should be the biggest (10)
        Assertions.assertThat(unsortedArray[unsortedArray.length - 1]).isEqualTo(10);

        // Then assert that first item in array should be the smallest (6)
        Assertions.assertThat(unsortedArray[0]).isEqualTo(6);
    }
}
