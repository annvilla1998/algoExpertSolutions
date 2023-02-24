// function longestSubstringWithoutDuplication(string) {
//     if(string.length === 1) return string;
//     let longestString = '';
  
//     for(let i = 0; i < string.length; i++){
//       let letters = new Set();
//       letters.add(string[i]);
  
//       for(let j = i + 1; j < string.length;j++){
//         let substring = string.slice(i,j + 1);
  
//         if(!letters.has(string[j])){
//           letters.add(string[j])
//           if(substring.length > longestString.length){
//               longestString = substring
//             }
//         }else{
//           break;
//         }
//       }
//     }
  
  
//     return longestString;
//   }

function longestSubstringWithoutDuplication(string) {
  const lastSeen = {};
  let longest = [0,1];
  let startIdx = 0;
  for(let i = 0; i < string.length; i++){
    const char = string[i];
    if(char in lastSeen){
      startIdx = Math.max(startIdx, lastSeen[char] + 1);
    }
    if(longest[1] - longest[0] < i + 1 - startIdx){
      longest = [startIdx, i + 1];
    }
    lastSeen[char] = i;
  }

  return string.slice(longest[0], longest[1]);
}