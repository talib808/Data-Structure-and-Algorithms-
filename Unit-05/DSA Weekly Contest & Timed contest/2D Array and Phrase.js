// Description

// You are given an arraymatrixofnrows andmcolumns which contains lower case English letters.

// How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?

// OJ2.png


// Input
// Input Format

// First line: Two integer n and m, where n denotes the number of rows and m denotes the number of columns in the grid

// Next n lines: Each line contains m characters which contains lower-case English letters only

// Constraints

// 1 <= n,m <= 100


// Output
// Output Format

// Print the number of times the word “saba” appears in the grid.


// Sample Input 1 

// 5 5
// safer
// amjad
// babol
// aaron
// songs
// Sample Output 1

// 2

function twoArrayAndPhrase(n, m, matrix){

    let count = 0
    let sum = ""
    let s = "saba"

    for(let i=0;i<n;i++)
    {
        for(let j=0;j<m;j++)
        {
            if(j<m-2){
                sum=matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]+matrix[i][j+3]
                if(sum==s){
                    count++
                }
            }
            if(i<n-3){
                sum=matrix[i][j]+matrix[i+1][j]+matrix[i+2][j]+matrix[i+3][j]
                if(sum==s){
                    count++
                }
        }

        if(i<n-3  && j<m-2)
        {
            sum=matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2]+matrix[i+3][j+3]
            if(sum==s){
                count++
            }
        }
        if(i>2 && j<m-2)
        {
            sum=matrix[i][j]+matrix[i-1][j+1]+matrix[i-2][j+2]+matrix[i-3][j+3]
            if(sum==s){
                count++
            }
        }
    }
}
console.log(count)
}
//function runProgram(input){
//     //Input Taking Here
//     input = input.trim().split("\n");
//     var x = input[0].trim().split(" ").map(Number);
//     var n = x[0];
//     var m = x[1];
//     var line = 1;
//     var mat = [];

//     for(let i=0; i<n; i++){
//         var temp = input[line].trim().split("");
//         mat.push(temp);
//         line++;

//     }
//     //console.log(n,m,mat);
//     arrayAndPhrase(n,m,mat);

// }
// if(process.env.USER===""){
//     runProgram('');
// }else{
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read="";
//     process.stdin.on("data",function(input){
//         read+=input;
//     });
//     process.stdin.on("end",function(){
//         read=read.replace(/\n$/,"");
//         read=read.replace(/\n$/,'');
//         runProgram(read);
//     });
//     process.on('SIGINT',function(){
//         read=read.replace(/\n$/,"");
//         runProgram(read);
//         process.exit(0);
//     });
// }

  
// }

