// Description

// You are given an array A of N integers. Now, two functions F(X) and G(X) are defined:

// F(X) : This is the smallest number Z such that X < Z <= N and A[X] < A[Z]

// G(X) : This is the smallest number Z such that X < Z <= N and A[X] > A[Z]

// Now, you need to find for each index i of this array G(F(i))

// , where 1 <= i <= N. If such a number does not exist, for a particular index i, output -1 as its answer. If such a number does exist, output  A[G(F[i])]


// Input
// Input Format

// The first line contains a single integer N denoting the size of array A. Each of the next N lines contains a single integer, where the integer on the line denotes A[i]. Input Format

// Constraints

// Print N space separated integers on a single line, where the *i* th integer denotes A[G(F(i))] or -1, if G(F(i)) does not exist.


// Output
// Output Format

// 1 <= N <= 30000

// 0 <= A[i] <= 10^18


// Sample Input 1 

// 8
// 3
// 7
// 1
// 7
// 8
// 4
// 5
// 2
// Sample Output 1

// 1 4 4 4 -1 2 -1 -1
// Hint

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = [];
    let line = 1;
    for(let i=0; i<n; i++) {
        arr.push(+input[line++].trim());
    }
    MasaiNumbersGame(n,arr);
 }
function  MasaiNumbersGame(n,arr) {
let output = "";

for(let i=0; i<n; i++) {
    let k = -1;
    for(let j=i+1; j<=n; j++) {
        if(arr[j]>arr[i]) {
             k = j;
            break;
        }
    }
    let ans = -1;  
    
    if(k === -1) {
       output+= -1 + " "; 
    } else {
      for(let p=k; p<=n; p++) {
         if(arr[p]<arr[k]) {
              ans = arr[p];
             break;
          }
       }
       output += ans + " ";
    }
 }
  console.log(output);
}
  if (process.env.USERNAME === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
