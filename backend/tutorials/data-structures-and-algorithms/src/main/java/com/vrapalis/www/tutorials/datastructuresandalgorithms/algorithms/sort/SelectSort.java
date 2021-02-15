package com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.sort;

/**
 * Select sort algorithm
 */
public class SelectSort {
    /**
     * Sort array of type integers
     *
     * @param unsortedArray
     * @implNote not thread safe
     */
    public static void sort(Integer[] unsortedArray) {
        for (int outerIndex = 0; outerIndex < unsortedArray.length; outerIndex++) {
            int smallestIndex = outerIndex;
            for (int innerIndex = outerIndex + 1; innerIndex < unsortedArray.length; innerIndex++) {
                if (unsortedArray[smallestIndex] > unsortedArray[innerIndex]) {
                    smallestIndex = innerIndex;
                }
            }

            Integer temp = unsortedArray[outerIndex];
            unsortedArray[outerIndex] = unsortedArray[smallestIndex];
            unsortedArray[smallestIndex] = temp;
        }
    }
}
