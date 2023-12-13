/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

    var l1 = str1.length;
    var l2 = str2.length; 
    

    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();

    var sortedStr1 = s1.split("").sort().join("");  
    var sortedStr2 = s2.split("").sort().join(""); 

    if(l1 != l2)
    {
      return false;
    }


    //console.log(sortedStr1);
    //console.log(sortedStr2);
    //s1.sort();
    //s2.sort()
   
    // Compare sorted strings
    for (let i = 0; i < l1; i++)
    {
        //console
        if (sortedStr1[i] != sortedStr2[i])
          return false;
    }
        
   
    return true;
}

module.exports = isAnagram;
