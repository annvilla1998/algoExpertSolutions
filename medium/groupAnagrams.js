function groupAnagrams(words) {
    let wordsObj = {};
  
    for(let word of words){
      let sortedWord = word.split("").sort().join("");
      if(sortedWord in wordsObj){
        wordsObj[sortedWord].push(word);
      }else{
        wordsObj[sortedWord] = [word];
      }
    }
  
    return Object.values(wordsObj);
  }