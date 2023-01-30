// Description

// You brought virtual reality glasses. There is only one game installed to it called “The Abandoned City”

// You are lost in an abandoned city. In order to escape you have to pay at least thetargetnumber of golden coins. So you decide to collect the gold in the houses of that city. The city contains N houses aligned in a straight line. Each house contains a number of gold coins.

// You need to find out the shortest distance you have to walk until you collect the needed amount of golden coins to get out.

// You can start from any house i and continue (i+1)th or (i-1)th house but you can’t change your direction and stop at any house.

// Notethat if it's not possible to collect at least the target number of gold coins then, in that case, you will ultimately lose the game and you must print -1.


// Input
// The first line contains a single positive integer T denoting the number of test cases.

// The first line of each test case contains two positive integer N, target denoting the number of houses andthe number of golden coins needed respectively.

// The second lineof each test casecontains N space-separated integers coins[i] denoting the number of coins in ith house.

// Constraints

// 1 <= T <= 10

// 1 <= N <=10^5

// 1 <= coins[i] <=10^5

// 1<= target <=10^9


// Output
// The output should contain the shortest distance you need to walk to collect target coins.


// Sample Input 1 

// 1
// 5 7
// 1 2 3 4 5
// Sample Output 1

// 2
// Sample Input 2 

// 2
// 5 13
// 5 1 2 3 4 
// 1 10
// 1
// Sample Output 2

// 5
// -1
// Hint

// Explanation for Sample 1

// It can be seen that to collect 7 coins you will have to travel through at least 2 houses. The possible travel options are:-

// Start from the 3rd house, travel right and stop at 4 or start from 4th house, travel left and stop at 3 rd house, thus collecting 7 coins.

// Start from 4th house, travel right and stop at 5th or start from 5th house, travel left and stop at 4th house, thus collecting 11 coins.

// Thus the shortest distance you have to walk until you collect 7 golden coins is 2.

function runProgram(input) {
    input = input.trim().split('\n')
    const t = +input[0]

    for ( let k = 0, l = 1; k < t; k++ ) {
        const [ n, g ] = input[l++].trim().split(' ').map(Number)
        const arr = input[l++].trim().split(' ').map(Number)
        console.log( shortestRoute( arr, n, g ) )
    }
    function shortestRoute( arr, n, g ) {
        let s = 0, e = n+1
        let sum = arr[0], b = 0

        for ( let i = 1; i <= n; i++ ) {
            while ( sum - arr[b] >= g && b < i ) {
                sum -= arr[b]
                b++
            }

            if ( sum >= g ) {
                if ( i - b < e - s ) {
                    e = i
                    s = b
                }
            }

            if ( i < n ) sum += arr[i]
        }
        return e - s === n+1 ? -1 : e - s 
    }


  }
  if (process.env.USERNAME ===" ") {
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
