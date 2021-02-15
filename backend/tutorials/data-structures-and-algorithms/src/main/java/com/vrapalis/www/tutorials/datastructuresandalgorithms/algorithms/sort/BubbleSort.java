package com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.sort;

import java.util.Arrays;

/**
 * Bubble sort has many implementations, this is one of them.
 * Complexity (Big O Notation) of this algorithm is N².
 *
 * @author Vitali Rapalis
 */
public final class BubbleSort {
    private final int[] array;

    public BubbleSort(int[] array) {
        this.array = array;
        System.out.print("Bubble Sort Start => ");
        Arrays.stream(array).forEach(System.out::print);
    }

    public void sort() {
        for (int outerLoop = 0; outerLoop < array.length; outerLoop++) {
            for (int innerLoop = 0; innerLoop < array.length - outerLoop - 1; innerLoop++) {
                if (array[innerLoop] > array[innerLoop + 1]) {
                    swap(array, innerLoop, innerLoop + 1);
                }
            }
        }
    }

    private void swap(final int[] array, final int previousIndex, final int nextIndex) {
        final int temp = array[previousIndex];
        array[previousIndex] = array[nextIndex];
        array[nextIndex] = temp;
    }

    public void print() {
        System.out.println("");
        System.out.print("Bubble Sort End => ");
        Arrays.stream(array).forEach(System.out::print);
    }
}
