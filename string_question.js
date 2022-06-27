//count characters

const countCharacters = (S) => 
{
    let count_A=0;
    let count_B=0;
    let AB=[];
    for(let i=0;i<S.length;i++){
    if(S[i]==="A"){
      count_A+=1;
    }
    else if(S[i]==="D"){
      count_B+=1;
    } 
    }
    AB.push(count_A);
    AB.push(count_B);
    return AB;
    
};

//count the heads

var Count_Occ = (s) => 
{
    let count = 1;
  let str = "";
  let result = "";
  for(let i=0;i<s.length;i++){
    for(let j=i+1;j<s.length;j++){
      if(s[i]===s[j]){
        count++;
      }
    }
    if(count>1){
      str=s[i];
      result = result+" "+s[i]+count;
      s=s.replace(str," ");
      s=s.split(str).join("");
      
    }
    count=1;
  }
  return result.split(" ").sort().join("");
};
 

//count the vowels

var Count_Vowels= (S) => 
{
  let count=S.match(/[aeiou]/gi);
  return count.length;
};

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

//Find the winner

var Game_Winner = (S) => 
{
   
  let countA = S.match(/[a]/gi).length;
  let countD = S.match(/[d]/gi).length;
  
  if (countA>countD){
    return "Aditya";
  }else if(countD>countA){
    return "Danish";
  }else if(countD===countA){
    return "Draw";
  }
    
};

//join strings

const joinStrings = (S, P) => 
{
  return S.concat(P); 
  
};

//Palindrome check

var Palin_Check = (str) =>
{
  let rev="";
  let i=str.length-1;
  while(i>=0){
    rev+=str[i];
    i--;
  }
  if(str===rev.toLowerCase()){
    return "True";
  }
  else
    return "False";
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

//second method------

 if((S1.localeCompare(S2))===0){
      return "YES";
    }
    else 
      return "NO";

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
