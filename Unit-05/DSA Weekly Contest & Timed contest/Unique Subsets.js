// Description

// You are given an arrayAof sizeN.

// Find out if there exists a subset of this array, such that the size of the subset is no lesser than K, and the number of distinct numbers in the subset is 1

// If such a subset exists, printTrue, else printFalse


// Input
// The first line of the input containsN, the size of the array

// The next line containsNspace separated integers, denoting the elements of the array

// Finally, the last line of the input containsK, as mentioned in the problem statement

// Constraints

// 1 <=N<= 18

// 1 <=A[i]<= 30


// Output
// PrintTrue, if the subset required, as mentioned in the problem statement exists, else printFalse


// Sample Input 1 

// 3 
// 1 2 1
// 2
// Sample Output 1

// True
// Sample Input 2 

// 3 
// 1 2 1
// 3
// Sample Output 2

// False
// Hint

// In the first sample test case, all the subsets of the arrays are

// []
// [1]
// [1, 2]
// [1, 2, 1]
// [1, 1]
// [2]
// [2, 1]
// [1]

// The subset[1,1]has size 2, which satisfied the condition for the set to be greater than equal to K = 2. Therefore, the answer isTrue

// In the second test case, the value ofK = 3, and no subset of the array satisfies the required condition. Therefore, the answer isFalse
function runProgram(input) {
    var input = input.split('\n')
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2]
    var ans = [];

    function isSubsetExist(curr, idx) {
        if (idx === n) {
            if (curr.length >= k) {
                var flag = 0;
                for (var i = 1; i < curr.length; i++){
                    if (curr[0] !== curr[i]){
                        flag = 1;
                    }
                }
                if (flag == 0) {
                    ans.push(curr.join(""))
                }
            }
            return;
        }
        isSubsetExist(curr, idx + 1)
        isSubsetExist([...curr, arr[idx]], idx + 1)
    }
    isSubsetExist([], 0)
    if (ans.length !== 0) {
        console.log("True")
    } else {
        console.log("False")
    }
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
        process.exit(0);
    });
}
