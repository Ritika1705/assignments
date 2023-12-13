/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  var st = str.toLowerCase();
  
  var fst = "";
  var l = st.length;

  for(var i=0;i<l;i++)
  {
    if(st[i]>='a' && st[i]<='z')
    {
      fst = fst.concat(st[i]);
    }
  }
  
  var len = fst.length;

  for(var i=0;i<=len/2;i++)
  {

    if(fst[i] != fst[len-i-1])
    {
      return false;
    }
  }

  return true;
}


module.exports = isPalindrome;
