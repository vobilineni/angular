package com.springmvc.boot;

// package com.practice;

public class ArraySum {

  public static void main(String[] args) {

    // TODO Auto-generated method stub
    int target = 44;
    int[] a = { 1, 4, 8 };
    int[] b = { 40, 2, 50, 30 };
    boolean flag = false;
    for (int i = 0; i < a.length; i++) {
      if (flag) {
        break;
      } else {
        flag = getSum(a[i], b, target);
      }
    }
    System.out.println(flag);
  }

  private static boolean getSum(int i, int[] b, int target) {
    // TODO Auto-generated method stub
    for (int j = 0; j < b.length; j++) {
      if (i + b[j] == target) {
        return true;
      }
    }
    return false;
  }
}
