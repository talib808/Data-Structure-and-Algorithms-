// Description

// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note: Each toy can be purchased only once.


// Input
// Input Format
// The first line contains two integers, n and k, the number of priced toys and the amount Mark has to spend.

// The next line contains n space-separated integers prices[i]

// Constraints
// 1 <= n <= 10^5

// 1 <= k <= 10^9

// 1 <= prices[i] <= 10^9


// Output
// Output Format
// Print the maximum number of toys


// Sample Input 1 

// 7 50
// 1 12 5 111 200 1000 10
// Sample Output 1

// 4
// Hint

// He can buy only 4 toys at most. These toys have the following prices: 1,12,5,10

import java.util.*;
class Main{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        long k=sc.nextLong();
        long arr[]=new long[n];
        for(int i=0;i<n;i++)
          arr[i]=sc.nextLong();
        Arrays.sort(arr);
        int toys=0;
        for(int i=0;i<n;i++){
            if(arr[i]<=k){
                toys++;
                k-=arr[i];
            }else
                break;
           }
       System.out.print(toys);
    }
}
