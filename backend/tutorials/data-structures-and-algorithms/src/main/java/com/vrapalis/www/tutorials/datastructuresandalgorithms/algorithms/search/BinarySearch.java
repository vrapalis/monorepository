package com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.search;

public class BinarySearch {

    public static boolean recursiveSearch(int element, Integer[] array, int first, int last) {
        int middle = (first + last) / 2;
        boolean isIn = array[middle] == element;
        if (first > last) {
            return false;
        } else {
            if (isIn) {
                return true;
            }
            return recursiveSearch(element, array, element > array[middle] ? middle + 1 : first,
                    element > array[middle] ? array.length - 1 : middle - 1);
        }
    }
}
