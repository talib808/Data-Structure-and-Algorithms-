// Description

// Consider the following version of Bubble Sort:

//     for (int i = 0; i < n; i++) {   
//         for (int j = 0; j < n - 1; j++) {
//             if (a[j] > a[j + 1]) {
//                 swap(a[j], a[j + 1]);
//             }
//         }
//     }
// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// Array is sorted in numSwaps swaps, wherenumSwapsis the number of swaps that took place.

// First Element: firstElement, wherefirstElementis the first element in the sorted array.

// Last Element: lastElement, wherelastElementis the last element in the sorted array.


// Input
// Input Format
// The first line contains an integer,n, the size of the arraya.

// The second line containsnspace-separated integersai.

// Constraints
// 2 <= n <= 600

// 1 <= a[i] <= 2*10^6


// Output
// Output Format
// Print the three lines required


// Sample Input 1 

// 3
// 3 2 1
// Sample Output 1

// Array is sorted in 3 swaps
// First Element: 1
// Last Element: 3
// Hint

// Capture.
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = in.nextInt();
        }

        int numSwaps = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                    numSwaps++;
                }
            }

            if (numSwaps == 0) {
                break;
            }
        }

        System.out.println("Array is sorted in " + numSwaps + " swaps");
        System.out.println("First Element: " + arr[0]);
        System.out.println("Last Element: " + arr[arr.length - 1]);
    }
}

// function countSwaps(a) {
//     // Write your code here
//     let swap = 0;
//     for(let i =0;i<a.length;i++){
//         for(let j =i+1;j<a.length;j++){
//             if(a[i]>a[j]){
//                 swap++;
//                 let temp = a[i];
//                 a[i] = a[j];
//                 a[j] = temp;                
//             }
//         }   
//     }
//     console.log(`Array is sorted in ${swap} swaps.`);
//     console.log(`First Element: ${a[0]}`);
//     console.log(`Last Element: ${a[a.length-1]}`);
// }
// countSwaps([3, 2, 1])
