package com.vrapalis.www.tutorials.datastructuresandalgorithms;

import com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.sort.BubbleSort;

public class RunDataStructuresAndAlgorithms {
    public static void main(String[] args) {
        // Bubble sort example
        final var bubbleSort = new BubbleSort(new int[] {3,1,0,0,2,3});
        bubbleSort.sort();
        bubbleSort.print();
    }
}
