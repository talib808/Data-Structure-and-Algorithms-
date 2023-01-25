// Description

// You are given an integerN, find the square root of the given integerN. If the integer is not a perfect square, print the floor value of the given integer.

// Note:- The floor value is the largest integer value lesser than a given number K. For example if the value ofK = 3.679, the floor value ofKis3.

// Note:You are not allowed to use any inbuilt function.

// Note: Try printing output only once, then individually for each test case.


// Input
// The first line of the input containsT, the number of test cases.

// The first and the only line of each test case contains,N, the value of the given integer

// Constraints

// 1 <=T<= 1000000

// 0 <=N<= 1000000000


// Output
// For each test case, print the square root of the integerNgiven if it is a perfect square, else print the floor value of it, on a new line.


// Sample Input 1 

// 2
// 4
// 8
// Sample Output 1

// 2
// 2
// Hint

// In the sample test cases, the value ofT = 2

// In the first test cases, the value ofN = 4, therefore, the square root of 4 is2, which is the required output.

// In the second test cases, the value ofN = 8therefore, the square root of 8 is2.82842..., therefore, the floor value of it is2, which is the required output.
import java.io.*; 
import java.util.*; 

class Main {
	public static void main (String[] args) {
            Scanner scan = new Scanner(System.in);
			int testCases = scan.nextInt();
            for(int x=1;x<=testCases;x++){
                int N =scan.nextInt();
                long low=0,high=N;
                while(low<high){
                   long  mid= (low+high+1)/2;  
                    long answer = mid*mid;                 
                    if(answer<=N){
                          low= mid;
                    }
                    else{
                        high=mid-1;
                    }
                }
                System.out.println(low);
            }
	}
}
