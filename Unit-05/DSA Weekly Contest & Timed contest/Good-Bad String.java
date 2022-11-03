// Description

// We do not like strings which have same consecutive letters. No one has any idea why it is so.

// We call these strings as Bad strings. So, Good strings are the strings which do not have same consecutive letters. Now, the problem is simple. Given a string S, you need to convert it into a Good String.


// Input
// Input Format:

// The first line contains an integer T, denoting the number of test cases.

// Each test case consists of a string S, which consists of only lower case letters.

// Constraints:

// 1 <= T <= 10

// 1 <= Length of string <= 30


// Output
// For each test case, print the answer to the given problem.

// The answer is the modified good string


// Sample Input 1 

// 3
// abb
// aaab
// ababa
// Sample Output 1

// ab
// ab
// ababa
import java.util.*;

class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while(t--!=0){
            String str = sc.next();
            
            String resStr = "";
            for (int i = 0 ; i < str.length(); i++) {
                while (i < str.length() - 1 && str.charAt(i) == str.charAt(i + 1)){
                    i++;
                }
                resStr += str.charAt(i);
            }
            
            for(int i=0;i<resStr.length();i++){
                System.out.print(resStr.charAt(i));
            }
            System.out.println();
        }
    }
}
