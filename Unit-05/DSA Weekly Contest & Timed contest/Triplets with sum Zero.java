// Description

// You are given an array A of size N.

// You need to count all triplets i,j,k, such that 0<=i < j < k <= N-1 and A[i]+A[j]+A[k]=0


// Input
// First line contains T, no of test cases.

// First line of each test case contains N and M, size of array and integer.

// Second line of each test case contains N spaced integers of array A.

// Constraints

// 1 <= T <= 10

// 3 <= N <= 10000

// 1 <= A[i] <= 1000


// Output
// For each test case, print the count on each test case.


// Sample Input 1 

// 3
// -1 -2 3
// Sample Output 1

// 1
// Sample Input 2 

// 4
// -1 -1 -2 3
// Sample Output 2

// 2
import java.io.*;
import java.util.*;
import java.lang.*;
class Main{
    public static void triplate(int[] arr, int num)
    {
        Arrays.sort(arr);
        int count = 0;
        for(int i = 0; i < num; i++)
        {
            int left = i+1;
            int right = num - 1;
            int x = arr[i];

            while(left < right)
            {
                if(x+arr[left] + arr[right] == 0)
                {
                    count++;
                    left++;
                    right--;
                }
                else if(x+arr[left] + arr[right] < 0)
                {
                    left++;
                }
                else
                {
                    right--;
                }
            }
        }
        System.out.println(count);

    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        int num  = sc.nextInt();
        int arr[] = new int[num];

        for(int i = 0; i < num; i++)
        {
            arr[i] = sc.nextInt();
        }
        triplate(arr, num);
    }
}
