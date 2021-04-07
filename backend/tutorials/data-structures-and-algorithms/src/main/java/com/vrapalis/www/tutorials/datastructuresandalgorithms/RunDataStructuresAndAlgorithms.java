package com.vrapalis.www.tutorials.datastructuresandalgorithms;

import com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.sort.BubbleSort;

public class RunDataStructuresAndAlgorithms {
    public static void main(String[] args) {
        // Bubble sort example
        final var bubbleSort = new BubbleSort(new int[]{9, 8, 9, 6, 7, 1, 3, 2, 9});
        bubbleSort.sort();
        bubbleSort.print();
    }
}