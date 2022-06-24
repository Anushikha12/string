//Concatenate the strings

var Concatenate_Strings = (S1, S2) => 
{
   return S1.concat(S2);   
};

//Find length

const findLength = (S) => 
{
   let count=0;
   for(let i of S){
     count+=1;
   }
   return count;
};

//join strings

const joinStrings = (S, P) => 
{
  return S.concat(P); 
  
};

//reverse the string

var Reverse_String = (str) => 
{
   let rev="";
   let i=str.length-1;
   while(i>=0){
     rev+=str[i];
     i--;
   }
   return rev;
   
};

//match the strings

var String_Match = (S1,S2) => 
{
    if(S1==S2){
      return "YES";
    } 
    else
     return "NO";
};

//string replace

var Replace = (S, pattern , text) => 
{
   return S.replace(pattern,text);   
};

//split the string

var Split_the_string = (S) => 
{
  return S.split(" ");
        
};

//count the vowels and consonants

var Count_Vowels= (S) => 
{
   let count1=S.match(/[aeiou]/gi);
   return count1.length;
};
var Count_Consonants= (S) => 
{
   let count2=S.match(/[^aeiou]/gi);
   return count2.length;
};