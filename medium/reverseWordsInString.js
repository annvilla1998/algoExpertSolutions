function reverseWordsInString(string) {
    let reverseString = '';
    let wordsArr = string.split(" ");
    
    for(let i = wordsArr.length - 1; i >= 0; i--){
      reverseString += wordsArr[i];
      if(i !== 0){
        reverseString += " ";
      }
    }
    return reverseString;
  }