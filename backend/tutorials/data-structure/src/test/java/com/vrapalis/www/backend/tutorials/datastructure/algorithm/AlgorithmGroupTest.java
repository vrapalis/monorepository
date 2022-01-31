package com.vrapalis.www.backend.tutorials.datastructure.algorithm;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

@DisplayName("Algorithm group test")
public class AlgorithmGroupTest {

    @Nested
    @DisplayName("Sort algorithm group test")
    class SortAlgorithmGroupTest {

        @Test
        @DisplayName("Sort algorithm test")
        void sortAlgorithmTest() {
            // Given unsorted list
            List<Number> unsortedNumbers = Arrays.asList(3, 2, 1, 4, 6, 5, 8, 7, 9, 1);
            Assertions.assertThat(unsortedNumbers).containsSequence(3, 2, 1, 4, 6, 5, 8, 7, 9, 1);
            System.out.println("Unsorted List: " + unsortedNumbers);

            // When sort
            List<Number> sortedNumbers = AlgorithmUtility.SortAlgorithm.sort(unsortedNumbers);

            // Then
            Assertions.assertThat(sortedNumbers).containsSequence(1, 2, 3, 4, 5, 6, 7, 8, 9);
            System.out.println("Sorted List: " + sortedNumbers);
        }

    }
}
