function longestSubstringWithoutDuplication(string) {
    if(string.length === 1) return string;
    let longestString = '';
  
    for(let i = 0; i < string.length; i++){
      let letters = new Set();
      letters.add(string[i]);
  
      for(let j = i + 1; j < string.length;j++){
        let substring = string.slice(i,j + 1);
  
        if(!letters.has(string[j])){
          letters.add(string[j])
          if(substring.length > longestString.length){
              longestString = substring
            }
        }else{
          break;
        }
      }
    }
  
  
    return longestString;
  }