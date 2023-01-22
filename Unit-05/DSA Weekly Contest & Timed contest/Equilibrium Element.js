// Description

// Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.


// Input
// Input Format

// First line contains an integer N denoting the size of the array.

// Then in the next line are N space separated values of the array A.

// N <= 1000

// Ai <= 10000


// Output
// In a new line print the position at which the elements are at equilibrium if no equilibrium point exists print -1.


// Sample Input 1 

// 5
// 3 3 5 5 1
// Sample Output 1

// 3

function equilibriumElement(N, arr){
   let flag=false;
    let sum = 0;
    let arrsum =[];

    for(let i=0; i<N; i++){
        sum += arr[i];
        arrsum.push(sum);
    }

    for(let i=0; i<N; i++){
        leftsum = arrsum[i]-arr[i];
        rightsum = sum - arrsum[i];
        if(leftsum === rightsum){
            console.log(i+1);
            flag=true;
        }
    }

    if(flag===false){
        console.log(-1);
    }
}
