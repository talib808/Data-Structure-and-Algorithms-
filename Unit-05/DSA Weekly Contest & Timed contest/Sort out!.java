// Description

// Given an array A of non-negative integers of size **m**. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// You can only write your own sorting algorithm must not use builtin functionality of sort()


// Input
// Input Format

// The first line of input consists of the size of the array

// The next line consists of the array of size m

// Constraints

// 1<=m<=10000

// 0<=A[i]<=1000




// Output
// Output Format

// Output consists of a single line of integers


// Sample Input 1 

// 5
// 4 5 3 7 1
// Sample Output 1

// 4 2 0 1 3

// import java.util.Scanner;
// public class Main{
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         int N = scanner.nextInt();
//         int arr[] = new int[N];
//         for (int k = 0; k < N; k++)
//             arr[k] = scanner.nextInt();
//         int[] arr2 = new int[N];
//         for (int i = 0; i < N; i++) {
//             arr2[i] = arr[i];
//         }
//         int swap;
//         for (int i = 0; i < N - 1; i++) {
//             int min = i;
//             for (int j = i + 1; j < N; j++) {
//                 if (arr[j] < arr[min]) {
//                     swap = arr[j];
//                     arr[j] = arr[min];
//                     arr[min] = swap;
//                 }
//             }
//         }
//         for (int i = 0; i < N; i++) {
//             for (int j = 0;j<N;j++ ){
//                 if(arr[i]==arr2[j]){
//                     System.out.print(j + " ");
//                 }
//             }
//         }
//     }
// }
import java.util.*;

class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++) arr[i] = sc.nextInt();
        int[] newArr = new int[n];
        for(int i=0;i<n;i++){
           newArr[i]+=i;
        }
        for(int i=0;i<n-1;i++){
            for(int j=0;j<n-i-1;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    temp=newArr[j];
                    newArr[j]=newArr[j+1];
                    newArr[j+1]=temp;
                }
            }
        }
        for(int i=0;i<n;i++){
            System.out.print(newArr[i]+" ");
        }
        System.out.println();
    }
}
