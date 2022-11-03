/*Description

Recently the famous ACP Pradhyuman has been handed a mystery to solve. His team has a recovered an old phone with a number keypad from the crime site. The picture of the phone keypad is attached below.

ACP suspects something is wrong and feels curious about it. He has instructed his junior Daya to send this phone to forensic for further investigation. Doctor Salunkhe, one of the best forensic experts analyzes the phone and figures out the sequence of digit typed while sending the last message. Doctor Salunkhe stores this sequence as a string S.

It's now Daya's task to figure out all the possible strings (messages) that the digit string could represent so that further investigation can be carried out. Since Daya is busy breaking all the doors of the crime scene, can you please help him out?

phone.png

Here, consider that pressing one button could lead to any letter possible by the digit.

For example, if 2 is pressed, it could be a, b or c. Similarly for all the digits consider this.


Input
The first line of the input contains a string S (1 ≤ length of string S ≤ 5).

The digits of the strings consist of 2 - 9 both inclusive.


Output
Print each possible string in a new line. The results should be lexicographically sorted.


Sample Input 1 

22
Sample Output 1

aa
ab
ac
ba
bb
bc
ca
cb
cc
Sample Input 2 

9
Sample Output 2

w
x
y
z*/
import java.util.*; 
  class Main { 
      public static void printAll (String str, int ind, String ans) { 
         if (ind == str.length ()) { 
          System.out.println(ans);
          return; 
         }
    String curr = numString (str.charAt(ind)); 
    for ( int i = 0; i < curr.length(); i++){ 
        ans+= curr.charAt(i);
    printAll (str, ind+1, ans); 
    ans = ans.substring (0, ans.length()-1);
         }
      }
    public static String numString(char n){ 
    if (n == '2'){ 
    return "abc"; 
    }else if(n == '3'){ 
    return "def"; 
    } else if (n == '4'){
    return "ghi"; 
    } else if (n == '5'){ 
    return "jkl"; 
    } else if(n == '6'){ 
    return "mno"; 
    }else if (n == '7'){
    return "pqrs"; 
    } else if (n =='8'){ 
    return "tuv";
    } 
    return "wxyz"; 
    } 
    public static void main (String [] args){ 
        Scanner sc = new Scanner (System.in); 
        String str = sc.next(); 
        printAll(str, 0, "");
    }
  }
