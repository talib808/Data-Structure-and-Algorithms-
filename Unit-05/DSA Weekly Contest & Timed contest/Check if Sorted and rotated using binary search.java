/*Description

Given an array of N distinct integers. Check if this array is sorted and rotated counter-clockwise.

A sorted array is not considered as sorted and rotated, i.e., there should be at least one rotation.


Input
Input Format

First line consists of integer N

Second consists of N integers separated by spaces.

Constraints

1 <= N <= 1000


Output
Print "YES" if the array is sorted and rotated at least once else print "NO"


Sample Input 1 

6
3 4 7 9 1 2
Sample Output 1

YES*/
import java.util.Scanner;

public class Main {

    // Function to check if an array is
    // sorted and rotated clockwise

    static void checkIfSortRotated(int arr[], int n) {
        int minValue = Integer.MAX_VALUE;
        int maxValue = Integer.MIN_VALUE;

        int minIndex = -1;

        // Find the minimum element
        // and it's index
        for (int i = 0; i < n; i++) {
            if (arr[i] < minValue) {
                minValue = arr[i];
                minIndex = i;
            }
        }
        boolean isCheck1 = true;

        // Check if all elements before
        // minIndex are in increasing order
        for (int i = 1; i < minIndex; i++) {
            if (arr[i] < arr[i - 1]) {
                isCheck1 = false;
                break;
            }
        }

        boolean isCheck2 = true;

        // Check if all elements after
        // minIndex are in increasing order
        for (int i = minIndex + 1; i < n; i++) {
            if (arr[i] < arr[i - 1]) {
                isCheck2 = false;
                break;
            }
        }

        // check if the minIndex is 0, i.e the first element
        // is the smallest , which is the case when array is
        // sorted but not rotated.
        if (minIndex == 0) {
            System.out.print("NO");
            return;
        }
        // Check if last element of the array
        // is smaller than the element just
        // before the element at minIndex
        // starting element of the array
        // for arrays like [3,4,6,1,2,5] - not sorted
        // circular array
        if (isCheck1 && isCheck2 && (arr[n - 1] < arr[0])) {
            System.out.println("YES");
        } else {
            System.out.print("NO");
        }
    }


    public static void main(String[] args)
    {
        Scanner scanner=new Scanner(System.in);
        int n= scanner.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<n;i++){
            arr[i]= scanner.nextInt();
        }
        checkIfSortRotated(arr,n-1);
    }
}
