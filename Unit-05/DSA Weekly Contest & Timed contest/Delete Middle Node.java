// Description

// You are given the head of a linked list. Delete the middle node, and return theheadof the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.



// Note: You don't have to take input or print output, just complete the function deleteMiddle() and return the head pointer of the modified list


// Input
// Input Format

// The first line contains the number of nodes , N

// The second line contains the values of nodes.

// Constraints

// 1<=N<=10^4


// Output
// Complete the function deleteMiddle() and return the head of modified list


// Sample Input 1 

// 7
// 3 1 3 4 5 5 2 
// Sample Output 1

// 3 1 3 5 5 2 
// Sample Input 2 

// 6
// 3 3 2 3 3 4 
// Sample Output 2

// 3 3 2 3 4 

import java.util.*;
   public class Main{
       
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int[] ar = new int[a];
        for(int i=0; i<a; i++){
            
            ar[i] = sc.nextInt();
        }
        
        for(int i=0; i<a; i++){
            if(i != a/2){
                System.out.print(ar[i] + " ");
                continue;
            }
        }
    }
}
