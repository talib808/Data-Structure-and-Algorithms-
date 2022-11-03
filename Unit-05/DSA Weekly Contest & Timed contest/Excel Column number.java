/*Description

Given a column title as appear in an Excel sheet, return its corresponding column number.

it is guaranteed that string consists of characters from 'A' - 'Z'.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

Input
1<=T<=10

1<= |Si| <= 10


Output
output a single integer for all test case , the solution to the problem


Sample Input 1 

3
A
AB
ZY
Sample Output 1

1
28
701*/
import java.util.*;

class Main{
    public static long solve(String str){
        long sum=0;
        long power = str.length()-1;
        
        for(int i=0;i<str.length();i++){
            long num = str.charAt(i)-64;
            sum+=num*(Math.pow(26,power));
            power--;
        }
        return sum;
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t--!=0){
            String str = sc.next(); 
            
            long ans = solve(str);
            
            System.out.println(ans);
        }
    }
}
// function findColumn(s) {
//     var sum = 0;
//     var power = s.length - 1;

//     for (var i = 0; i < s.length; i++) {
//         var num = s.charCodeAt(i) - 64;
//         sum += num * (26 ** power);
//         power--;
//     }
//     return sum;
// }

// function runProgram(input) {
//     var newInput = input.trim().split("\n");
//     var t = Number(newInput[0]);
//     for (var i = 1; i <= t; i++) {
//         var s = newInput[i];
//         console.log(findColumn(s));
//     }
// }
// if (process.env.USERNAME === "Talib") {
//     runProgram(``);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//         read += input;
//     });
//     process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }
