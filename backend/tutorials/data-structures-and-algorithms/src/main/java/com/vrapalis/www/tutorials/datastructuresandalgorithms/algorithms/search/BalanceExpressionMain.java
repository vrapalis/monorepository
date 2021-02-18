package com.vrapalis.www.tutorials.datastructuresandalgorithms.algorithms.search;

public class BalanceExpressionMain {
    public static void main(String[] args) {
        final var balancedExpression = new BalancedExpression();
        var expression = "{0}";

        System.out.println(balancedExpression.isExpressionBalanced(expression));
    }
}
