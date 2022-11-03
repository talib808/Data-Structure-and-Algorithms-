/*Description

Given an array A, print starting and ending index of all subarrays in the array which has sum 0. (0-indexing)


Input
Input Format

The single line contains an array of integers.

Constraints

1 <= N <= 100


Output
Print starting and ending index of all subarrays in the array which has sum 0


Sample Input 1 

6 3 -1 -3 4 -2 2 4 6
Sample Output 1

2 4
2 6
5 6
Hint

Sample 1 Explanation

6 3 -1 -3 4 -2 2 4 6

Subarray from Index 2 to 4 = -1+-3+4 =0

Subarray from Index 2 to 6 = -1+3+4+-2+2 = 0

Subarray from Index 5 to 6 = -2+2 = 0

so, subarrays will be

2 4 2 6 5 6 and the list should be in a sorted manner. i.e subarray 2 6 should be printed before 5 6 .

*/
function findSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function SubarrayUnderCondition(arr) {

    for (var i = 0; i < arr.length; i++) {
        var subArr = [];
        for (var j = i; j < arr.length; j++) {
            subArr.push(arr[j]);

            if (findSum(subArr) === 0) {
                console.log(i, j);
            }
        }
    }

}
function runProgram(input) {

    var arr = input.trim().split(" ").map(Number);

    SubarrayUnderCondition(arr);
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
