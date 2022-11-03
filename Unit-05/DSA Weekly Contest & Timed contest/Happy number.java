// Description

// Write an algorithm to determine if a numbernis happy.

// Ahappy numberis a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.

// Repeat the process until the number equals 1 (where it will stay), or itloops endlesslyin a cycle which does not include 1.

// Those numbers for which this processends in 1are happy.


// Input
// Input Format
// The first line contains an integer t - the number of testcases.

// The next t lines contain the description of the t testcases.

// The first and only line of each testcase contains an integer n.

// Constraints
// 1 <= t <= 30

// 1 <= n <= 2^31-1


// Output
// Output Format
// For each testcase output Yes if the number is happy, else No on a new line.


// Sample Input 1 

// 2
// 19
// 2
// Sample Output 1

// Yes 
// No
// Hint

// First testcase
// 1^2 + 9^2 = 82

// 8^2 + 2^2 = 68

// 6^2 + 8^2 = 100

// 1^2 + 0^2 + 0^2 = 1

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int test = scan.nextInt();
        for (int t = 0; t < test; t++) {
            int number = scan.nextInt();

            int rem = 0;
            int sum = 0;
            HashSet<Integer> arrayList = new HashSet<>();

            while (arrayList.add(number)) {
                sum = 0;
                while (number >= 1) {
                    rem = number % 10;
                    sum = sum + (rem * rem);
                    number /= 10;
                }
                number = sum;
            }

            if (sum == 1) {
                System.out.println("Yes");
            } else {
                System.out.println("No");
            }
        }
    }
}
