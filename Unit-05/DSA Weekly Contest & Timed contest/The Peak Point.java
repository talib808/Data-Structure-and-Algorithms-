/*Description

Given an array of size n, which is strictly increasing and then strictly decreasing in order. Find out the index (0-based) which is the peak of the array.

Note that the extremities are not considered as peak and there exists a peak which is not at index 0 or at n-1.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (3 ≤ n ≤ 100000).

The second line of the test case contains n integers (1 ≤ Ai ≤ 100000) and they are all distinct in nature.


Output
For each test case, print the answer: The peak index.


Sample Input 1 

2
3
10 20 11
5
1 3 6 5 4
Sample Output 1

1
2*/
import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);

        int t=scanner.nextInt();
        while (t-->0){
            int n=scanner.nextInt();
            int arr[]=new int[n];
            for (int i=0;i<n;i++){
                arr[i]=scanner.nextInt();
            }
            int index=0;
            int comp=-1;
            for (int i=0;i<n;i++){
                if(comp<arr[i]){
                    index=i;
                    comp=arr[i];
                }
            }
            System.out.println(index);
        }
    }
}
