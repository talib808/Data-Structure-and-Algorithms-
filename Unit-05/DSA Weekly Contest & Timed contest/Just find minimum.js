// Description

// You are given N which is the number of different types of operation you need to perform on a stack. There are 3 different types of operations:

// PUSH V: Here V is an integer which you need to push in the stack

// POP: Here POP out the top element from stack. (In case stack is empty print "EMPTY")

// MIN: Print the minimum value present in the stack


// Input
// Input Format

// First line contains N which is the number of operations you need to perform on stack

// Next N line contains one of the 3 operations mentioned above

// Constraints

// N < 1000000

// V < 100




// Output
// Output Format

// The output consists of a line containing an integer with the smallest present value in the stack for queries of type "MIN" or "EMPTY" for "MIN" and "POP" operations when the stack is empty.


// Sample Input 1 

// 11
// PUSH 5
// PUSH 7
// PUSH 3
// PUSH 8
// PUSH 10
// MIN
// POP
// POP
// MIN
// POP
// MIN
// Sample Output 1

// 3
// 3
// 5
// ### **Pseudo Code**
// ```java
//     Stack<Integer> stack;
//     Stack<Integer> mins;

//     push(data){
//         stack.push(x);
//         if (mins.isEmpty() || x<=mins.peek()){
//             mins.push(x);
//         }
//     }

//     pop() {
//         if (!stack.isEmpty()){
//             temp = stack.pop();
//             if (temp==mins.peek()){
//                 mins.pop();
//             }
//         }
//     }

//     min() {
//       return mins.peek();
//     }

// Time Complexity
// The time complexity of all the three operations isO(1), so the time complexity isO(1)

// Space Complexity
// The elements need to be added into the stack, so in the worst case, all the elements need to be added in both the stacks. So, overall extra space required will be2N, where N is the number of elements being inserted. Therefore, the overall space complexity will beO(1)
function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    let minStack = [];
    let stack = [];
    let ans = [];

    for (let i = 1; i <= t; i++) {
        let inp = newInput[i].trim().split(" ");
        let n = minStack.length;

        if (inp[0] === "PUSH") {
            inp[1] = Number(inp[1]);
            stack.push(inp[1]);
            if (n === 0 || inp[1] < minStack[n - 1]) {
                minStack.push(inp[1]);
            } else {
                let ele = minStack[n - 1];
                minStack.push(ele);
            }
        } else if (inp[0] === "MIN") {
            if (n === 0) ans.push("EMPTY");
            else ans.push(minStack[n - 1]);
        } else {
            if (n === 0) ans.push("EMPTY");
            else {
                stack.pop();
                minStack.pop();
            }
        }
    }
    console.log(ans.join("\n"));
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
