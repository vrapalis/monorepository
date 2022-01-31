package com.vrapalis.www.backend.tutorials.datastructure.algorithm;

import lombok.experimental.UtilityClass;

import java.util.List;

@UtilityClass
public class AlgorithmUtility {

    @UtilityClass
    public class SortAlgorithm {
        public List<Number> sort(List<Number> unsortedNumbers) {
            for (int i = 0; i < unsortedNumbers.size(); i++) {
                for (int j = i + 1; j < unsortedNumbers.size(); j++) {
                    var inner = unsortedNumbers.get(i);
                    var outer = unsortedNumbers.get(j);
                    if (inner.intValue() > outer.intValue()) {
                        unsortedNumbers.set(i, outer);
                        unsortedNumbers.set(j, inner);
                    }
                }
            }
            return unsortedNumbers;
        }
    }
}
