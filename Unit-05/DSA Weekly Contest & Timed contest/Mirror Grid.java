// Mirror Grid Ended
// Description

// You are given a square grid with n rows and n columns. Each cell contains either 0 or 1.

// In an operation, you can select a cell of the grid and flip it (from 0→1 or 1→0). Find the minimum number of operations you need to obtain a square that remains the same when rotated 0∘, 90∘, 180∘ and 270∘.

// The picture below shows an example of all rotations of a grid.






// Input
// Input Format

// The first line contains a single integer t — the number of test cases.

// The first line of each test case contains a single integer n — the size of the grid.

// Then n lines follow, each with n characters ai,j — the number written in each cell.

// Constraints

// 1<=t<=10

// 1<=n<=100

// 0<=ai,j<=1


// Output
// For each test case output a single integer — the minimum number of operations needed to make the square look the same rotated 0∘, 90∘, 180∘ and 270∘.


// Sample Input 1 

// 1
// 3
// 010
// 110
// 010
// Sample Output 1

// 1
// Hint

// In the first test case, we can perform one operation to change a2,3 = 1. Now, all rotations of the square are the same.

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int t = sc.nextInt();
    for (int tc = 0; tc < t; ++tc) {
      int n = sc.nextInt();
      int[][] grid = new int[n][n];
      for (int r = 0; r < n; ++r) {
        String line = sc.next();
        for (int c = 0; c < n; ++c) {
          grid[r][c] = line.charAt(c) - '0';
        }
      }

      System.out.println(solve(grid));
    }

    sc.close();
  }

  static int solve(int[][] grid) {
    int n = grid.length;

    int result = 0;
    for (int r = 0, beginC = 0, endC = n - 2; beginC <= endC; ++r, ++beginC, --endC) {
      for (int c = beginC; c <= endC; ++c) {
        int oneCount =
            grid[r][c] + grid[c][n - 1 - r] + grid[n - 1 - r][n - 1 - c] + grid[n - 1 - c][r];

        result += Math.min(oneCount, 4 - oneCount);
      }
    }

    return result;
  }
}
