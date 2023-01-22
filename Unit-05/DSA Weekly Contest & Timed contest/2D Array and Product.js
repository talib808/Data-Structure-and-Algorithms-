// Description

// You are given an array of n rows, m columns which contains positive integers and  product P

// You need to find occurrences of the product of three consecutive numbers (i.e x,y, and z )whose product is equal to given P appear horizontally, vertically and diagonally in the given matrix.

// 1592215892-cf2597c7eb-S2DSumcreenshot.png


// Input
// Input Format

// First line: Three integers n, m and P where n denotes the number of rows, m denotes the number of columns in the matrix and P is the product.

// Next line: Each line contains m characters which contain positive integers only.

// Constraints

// 1< = n,m < 10

// 1<= P <=100




// Output
// Print the number of times the product p appears in the matrix


// Sample Input 1 

// 3 3 6
// 3 2 1
// 2 2 2
// 1 5 1
// Sample Output 1

// 3
// Hint

// Sample 1 Explanation

// The product P 6 presents 3 times in the matrix(1 Horizontal +1 Vertical + 1 Diagonal)

function twoArrayAndProduct(n, m, matrix, p){
  
    var count = 0;

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {

            if (m - j >= 3) {
                if (matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] === p) {
                    count = count + 1;
                }
            }

            if (n - i >= 3) {
                if (matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] === p) {
                    count = count + 1;
                }
            }

            if (m- j >= 3 && n - i >= 3) {
                if (matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] === p) {
                    count = count + 1;
                }
            }

            if (m - j >= 3 && i >= 3 - 1) {
                if (matrix[i][j] * matrix[i - 1][j + 1] * matrix[i - 2][j + 2] === p) {
                    count = count + 1;
                }
            }
        }
    }

    console.log(count);

}
  
