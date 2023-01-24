// Description

// You are given some matrices consist of only 0 's and  1's and you have to pick which are symmetric and which are not

// A matrix is said to be symmetric about X- axis if 1st row is identical to n-th row, 2nd is identical to (n-1)th  row and so on.

// A matrix is said to be symmetric about Y- axis if 1st column is identical to the nth column, 2nd identical to (n-1)th and so on for all columns.

// Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"


// Input
// Input Format :

// First line contains T - number of test cases.

// First line of each test case contains the n size of matrix.

// Next n lines contains n characters.

// Constraints :

// 1 ≤ T ≤ 10

// 2 ≤ N ≤ 32




// Output
// Print YES or NO in a new line for each test case .


// Sample Input 1 

// 5
// 2
// 11
// 11
// 4
// 0101
// 0110
// 0110
// 0101
// 4
// 1001
// 0000
// 0000
// 1001
// 5
// 01110
// 01010
// 10001
// 01010
// 01110
// 5
// 00100
// 01010
// 10001
// 01010
// 01110
// Sample Output 1

// YES
// NO
// YES
// YES
// NO
// Hint

// Output Explanation :

// Test Case 1: Symmetric about both axes, so YES.

// Test Case 2: Symmetric about X-axis but not symmetric about Y-axis, so NO.

// Test Case 3: Symmetric about both axes, so YES.

function symmetricOrNot(n, mat) {
  let top = 0;
  let bottom = n-1;
  let left = 0;
  let right = n-1;
  let flag1 = true;
  let flag2 = true;
  
   while(top < bottom)
   {
       let temp1 = "";
       let temp2 = "";
       
       for(let j=0; j<n; j++)
       {
           temp1 += mat[top][j];
       }
       
       for(let j=0; j<n; j++)
       {
           temp2 += mat[bottom][j];
       }
       
       if(temp1 !== temp2){
           flag1 = false;
       }
       top++;
       bottom--;
   }
   
   
   
   while(left < right)
   {
       let bag1 = "";
       let bag2 = "";
       
       for(let i=0; i<n; i++)
       {
           bag1 += mat[i][left];
       }
       
       for(let i=0; i<n; i++)
       {
           bag2 += mat[i][right];
       }
       
       if(bag1 !== bag2){
           flag2 = false;
       }
       left++;
       right--;
   }
   
   if(flag1 === false || flag2 === false){
       console.log("NO");
   }else{
       console.log("YES");
   }
}

