/*Description

Given a string s, find the power of the string.

The power of the string is defined as the longest length of the substring possible having only the same single character.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. Then t test cases follow.

The first line of each test case contains the string s (1 ≤ |s| ≤ 10000) — the length of the string.


Output
For each test case, print the answer: The power of the string.


Sample Input 1 

4
aaaaaa
aaabbb
asd
aabbcc
Sample Output 1

6
3
1
2
  */
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        int t=scanner.nextInt();
        while (t-->0){
            String s=scanner.next();
            int len=0;
            int count=1;
            for (int i=0;i<s.length()-1;i++){
               if (s.charAt(i)==s.charAt(i+1)){
                   count++;
               }else {
                   len=Math.max(count,len);
                   count=1;
               }

            }
            len=Math.max(len,count);

            System.out.println(len);
        }
    }
}
