// Description

// Given an array of integers temperatures represents the daily temperatures, print an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the number of days, - n
// The second line contains the temperatures for each day
// Constraints

// 1<=t<=10

// 1<=n<=10^5


// Output
// Print n integers where the ith value represents after how many days there will a warmer day, it such a does not exist print 0 for the ith day


// Sample Input 1 

// 2
// 4
// 30 40 50 60
// 8
// 73 74 75 71 69 72 76 73
// Sample Output 1

// 1 1 1 0
// 1 1 4 2 1 1 0 0
// Hint

// In the first sample test case,
// For Day 1, the next day is warmer, so the answer is 1

// For Day 2, the next day is warmer, so the answer is 1

// For day 3, the next day is warmer, so the answer is 1

// For day 4, we don't have the data after this day, so the answer is 0 
// In the second test case,
// For Day 1, the next day is warmer, so the answer is 1

// For Day 2, the next day is warmer, so the answer is 1

// For day 3, the next warmer day is 4 days later, so the answer is 4

// For day 4, the next warmer day is 2 days later, so the answer is 2

// For day 5, the next day is warmer, so the answer is 1

// For day 6, the next day is warmer, so the answer is 1

// For day 7, there is no warmer day after this, so the answer is 0

// For day 8, we don't have the data after this day, so the answer is 0 

import java.util.*;
class Main{
    public static int[] solve(int[] arr) {
        int[] ans = new int[arr.length];
        Stack<Integer> st = new Stack<>();
        for (int i = 0; i < arr.length; i++){
            while (!st.isEmpty() && arr[i] > arr[st.peek()]){
                int prevDay = st.pop();
                ans[prevDay] = i - prevDay;
            }
            st.add(i);
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t--!=0){
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++) arr[i] = sc.nextInt();
            int[] res = solve(arr);
            for(int i=0;i<n;i++){
                System.out.print(res[i]+ " ");
            }
            System.out.println();
        }
    }
}
