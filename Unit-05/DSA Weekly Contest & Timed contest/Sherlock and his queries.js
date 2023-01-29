// Description

// Sherlock has a matrix of dimension [nxm]. All the elements in this matrix are zero (Initialised as 0).

// Sherlock has q queries to execute on the matrix. Each query has two integers i.e, the type of query and the index.

// So if the type is 0, the index represents the index of row. Similarly, if the type is 1, the index represents the index of the column.

// Sherlock has to increase the value by 1 of all the elements that are present in that row or column depending on the type and index.

// In the end, after executing all queries, Sherlock is curious and wants to find the number of elements of the matrix which are odd (not divisible by 2).

// Note - 0-based indexing is followed here.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains two integers n,m (1≤ n ≤ 1000, 1≤ m ≤1000)  — the number of rows and columns, respectively.

// The second line of each test case contains a single integer q (1 ≤ q ≤ 100000) — the number of queries.

// The next q lines of each test case contain 2 integers type and index ( 0 ≤ type ≤ 1, 0 ≤ index ≤ n-1(for row) and m-1(for col) ) - the info on the query.


// Output
// For each test case, print the answer: The number of elements of the matrix which are odd.


// Sample Input 1 

// 2
// 2 2
// 4
// 0 1
// 0 0
// 0 0
// 1 1
// 4 4
// 10 
// 0 1
// 0 2
// 0 0
// 0 1
// 0 1
// 0 1
// 1 1
// 1 1
// 1 3
// 1 0
// Sample Output 1

// 2
// 8

function SherlockAndHisQueries(n,m,mat,query){

    let count = 0;

    for(let i=0; i<query.length; i++){
        if(query[i][0] === 0){
            rowInc(n,m,mat,query[i][1])
        }
    }

    for(let i=0; i<query.length; i++){
        if(query[i][0] === 1){
            columnInc(n,m,mat,query[i][1])
        }
    }

    function rowInc(n,m,mat,index){
        for(let i=0; i<m; i++){
            mat[index][i] = mat[index][i] + 1;
        }
    }
    function columnInc(n,m,mat,index){
        for(let i=0; i<n; i++){
            mat[i][index] = mat[i][index] + 1;

        }
    }

   for(let i=0; i<n; i++){
       for(let j=0; j<m; j++){
           if(mat[i][j]%2 !== 0){
               count++;
           }
       }
   }

   console.log(count);

}

function runProgram(input){

    input = input.trim().split("\n");
    var tc = +input[0].trim();
    let line = 1;
    let query = [];

    for(let i=0; i<tc; i++){
        let[n,m] = input[line].trim().split(" ").map(Number);
        var mat = new Array(n).fill().map( el => Array(m).fill(0) );
        query = [];
        line++;

        let queries = input[line].trim();
        line++;

        for(let j=0; j<queries; j++){
            let qarr = input[line].trim().split(" ").map(Number);
            query.push(qarr);
            line++;
        }
  
        SherlockAndHisQueries(n,m,mat,query);
    }

}
if(process.env.USER===""){
    runProgram('');
}else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read="";
    process.stdin.on("data",function(input){
        read+=input;
    });
    process.stdin.on("end",function(){
        read=read.replace(/\n$/,"");
        read=read.replace(/\n$/,'');
        runProgram(read);
    });
    process.on('SIGINT',function(){
        read=read.replace(/\n$/,"");
        runProgram(read);
        process.exit(0);
    });
}
