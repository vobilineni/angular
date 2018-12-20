package com.springmvc.boot;

// package com.practice;
public class ArraySumMethod2 {

  public static void main(String[] args) {
    // TODO Auto-generated method stub
    int target = 44;
    int[] a = { 1, 4, 8 };
    int[] b = { 40, 2, 50, 30 };
    System.out.println(targetValueExists(a, b, target));
  }

  private static boolean targetValueExists(int[] a, int[] b, int target) {
    for (int i = 0; i < a.length; i++) {
      for (int j = 0; j < b.length; j++) {
        if (a[i] + b[j] == target) {
          return true;
        }
      }
    }
    return false;
  }
}
