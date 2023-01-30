// Description

// Encryption is the process of converting a plaintext message into ciphertext which can be decoded back into the original message. An encryption algorithm along with a key is used in the encryption and decryption of data. There are several types of data encryptions which form the basis of network security. Encryption schemes are based on block or stream ciphers.

// Today, your task is to encrypt and print the encrypted string. You will be given a single line which contains alphabets, numbers and symbols, followed by a number K. You need to encrypt it in a way such that every character in the string is rotated by the given fixed number K.

// Only encrypt Alphabets and Numbers. (A-Z, a-z, and 0-9) . All Symbols, such as - , ; %, should remain unencrypted.

// Look at the sample test case for better understanding.


// Input
// Input Format

// First line of input contains a single line of string 'S'

// Second line contains the number, encrypt key  K

// Constraints

// S contains alpha, numeric and symbols

// 0<=N<=1000




// Output
// Print the encrypted string.


// Sample Input 1 

// All-convoYs-9-be:Alert1.
// 4
// Sample Output 1

// Epp-gsrzsCw-3-fi:Epivx5.
// Hint

// Sample 1 Explanation

// A becomes E, Y becomes C, 9 becomes 3,

// -, . unchanged.

function encrypt(s, n) {
    if (s >= "0" && s <= "9"){
        let temp = s.charCodeAt(0);
        temp = String.fromCharCode(((temp + n - 48) % 10) + 48);
        return temp;
    } else if (s >= "A" && s <= "Z") {
        let temp = s.charCodeAt(0);
        temp = String.fromCharCode(((temp + n - 65) % 26) + 65);
        return temp;
    } else if (s >= "a" && s <= "z") {
        let temp = s.charCodeAt(0);
        temp = String.fromCharCode(((temp + n - 97) % 26) + 97);
        return temp;
    } else return s;
}

function solve(str, n) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let s = encrypt(str[i], n);
        result += s;
    }
    return result;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let str = newInput[0].trim();
    let n = Number(newInput[1]);

    console.log(solve(str, n));
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
