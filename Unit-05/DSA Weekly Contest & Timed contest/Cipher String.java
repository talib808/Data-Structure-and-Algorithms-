/*Description

You are given a string of size N. You have to convert the string into its cipher form.

For example, the cipher form of a string "aabccd", will be "a2b1c2d1". The new generated string contains the characters, and the count of their occurrences in a consecutive manner.

Note: The string contains only lower-case characters.


Input
The first line of the input contains T, the number of test cases.

The first line of each test case contains N, the length of the string.

The next line contains the string, for which the cipher string is to be generated.

Constraints

1 <= T <= 10

1 <= N <= 100


Output
For each test case, print the cipher string for the given string, on a new line.


Sample Input 1 

2
5
aabcc
5
aazaa
Sample Output 1

a2b1c2
a2z1a2
Hint

In the first sample test case, the generated cipher string is "a2b1c2".

In the second sample test case, the generated cipher string is "a2z1a2"*/

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int testcases = scanner.nextInt();
        for (int t = 0; t < testcases; t++) {
            int N= scanner.nextInt();
            String[]arr=new String[N];
            String ch = scanner.next();
            int count=1;

             for (int i=0;i<ch.length()-1;i++){
                 if(ch.charAt(i)==ch.charAt(i+1)){
                     count++;

                 }else {
                     System.out.print(ch.charAt(i));
                     System.out.print(count);
                     count=1;
                 }

                 if(i==ch.length()-2){
                     if(ch.charAt(i)==ch.charAt(i+1)){
                         System.out.print(ch.charAt(i));
                         System.out.print(count);
                     }else {
                         System.out.print(ch.charAt(i+1));
                         System.out.print(count);
                     }
                 }
             }
            if(arr.length==1){
                System.out.print(ch);
                System.out.print(count);
            }
            System.out.println();
        }
    }
}
