// Description

// You are given a number, stored in a variable with the name,num

// Find out all the prime numbers, in the range, [1,num], including the value stored in num, and print each of them on a new line

// Note : 1 is not a prime number

// Input
// The first and the only line of the input contains the value stored in the variable with the namenum


// Output
// Print all the prime numbers, in the range from[1, num], includingnumitself


// Sample Input 1 

// 5
// Sample Output 1

// 2
// 3
// 5
// Hint

// In the sample test case, the value stored in the variablenum = 5. Therefore, all the prime numbers in the range, [1,5] are printed. Hence the output becomes

// 2
// 3
// 5
function primeLoopCheck(num) {

for(let j=1; j<=num; j++){
       
    let factore=0;
 
     for(let i=1; i<=j; i++){
         if(j%i==0){
             factore++;
         }
     }
     if(factore==2){
         console.log(j);
     }
  } 
}

