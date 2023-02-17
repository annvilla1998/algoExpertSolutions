function longestPalindromicSubstring(string) {
    let maxString = "";
  
    for(let i = 0; i < string.length; i++){
      for(let j = string.length; j >= 0; j--){
        if(isPalindrome(string.slice(i, j))){
          if(maxString.length < string.slice(i,j).length){
            maxString = string.slice(i,j)        
          }
        }
      }
    }
    return maxString;
  }
  
  function isPalindrome(string){
    let arr = string.split("");
    let copyArrReverse = [...arr].reverse();
  
    return arr.join("") === copyArrReverse.join("");
  }