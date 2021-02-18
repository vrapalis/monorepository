package com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.search;

import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.ArrayBoundStack;
import com.vrapalis.www.tutorials.datastructuresandalgorithms.datastructures.stack.Stack;

public final class BalancedExpression {
    private final String openSet;
    private final String closeSet;

    public BalancedExpression() {
        openSet = "({[";
        closeSet = ")}]";
    }

    public BalancedExpression(String openSet, String closeSet) {
        this.openSet = openSet;
        this.closeSet = closeSet;
    }

    public Integer isExpressionBalanced(String expression) {
        var expressionIndex = 0;
        var isBalanced = true;
        final var expressionLength = expression.length();
        final Stack<Integer> stack = new ArrayBoundStack<Integer>(expressionLength);

        while ((expressionIndex < expressionLength ) && isBalanced) {
            final var charAtIndex = expression.charAt(expressionIndex);
            final var openSetIndex = openSet.indexOf(charAtIndex);
            final var closeSetIndex = closeSet.indexOf(charAtIndex);

            if (openSetIndex != -1) {
                stack.push(openSetIndex);
            } else {
                if (closeSetIndex != -1) {
                    try {
                        final var topOpen = stack.top();
                        stack.pop();
                        if (closeSetIndex != topOpen) {
                            isBalanced = false;
                        }
                    } catch (Exception ex) {
                        isBalanced = false;
                    }
                }
            }

            expressionIndex++;
        }

        if (!isBalanced)
            return 1;
            // unbalanced symbols
        else if (!stack.isEmpty())
            return 2;
            // premature end of expression
        else
            return 0;
    }
}
