// Description

// You have n coins with certain values. Your task is to find all distinct money sums you can create using these coins.


// Input
// Input Format

// The first line contains the number of coins, N

// The second line contains the values of all the coins

// Constraints

// 1<=N<=20

// 1<=coin value<=100


// Output
// First print an integer K, the number of distinct coin sums. In the next line print all the distinct coin sums in increasing order


// Sample Input 1 

// 3
// 3 5 2 
// Sample Output 1

// 6
// 2 3 5 7 8 10 

import java.util.*;
class Main{
public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<n;i++)
        {
            arr[i]=sc.nextInt();
        }
        int dp[]=new int[100000];
        dp[0]=1;
        for(int j=0;j<n;j++)
        {
            for(int i=10000;i>0;i--)
            {
                if(i>=arr[j])
                {
                    dp[i]|=dp[i-arr[j]];
                }
            }
        }
        List<Integer> a=new LinkedList<>();
        for(int i=1;i<=10000;i++)
        {
            if(dp[i]>0)
            {
                a.add(i);
            }
        }
        System.out.println(a.size());
        for(int b:a)
        {
            System.out.print(b+" ");
        }
    }
  }
