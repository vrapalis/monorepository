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
        for (int i = 0; i < array.length; i++) {
            for (int y = i + 1; y < array.length; y++) {
                if (array[i] > array[y]) {
                    swap(array, i, y);
                }
            }
        }
    }

    private void swap(final int[] array, final int i, final int y) {
        final int temp = array[i];
        array[i] = array[y];
        array[y] = temp;
    }

    public void print() {
        System.out.println("");
        System.out.print("Bubble Sort End => ");
        Arrays.stream(array).forEach(System.out::print);
    }
}
