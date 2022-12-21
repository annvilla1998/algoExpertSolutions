//semordnilap pair: a set of different strings where the reverse of one
//word is the same as the forward version of the other.

//takes in a list of unique strings and returns a list of semordnilap pairs

//O(n^2)
// function semordnilap(words) {
//     let pairs = [];
//     let set = new Set();

//     for(let i = 0; i < words.length; i++) {
//         for(let j = 0; j < words.length; j++) {
//             let reversed = words[i].split("").reverse();
//             if(words[i] !== words[j] && reversed.join("") === words[j] && !set.has(words[i]) && !set.has(words[j])){
//                 pairs.push([words[j],words[i]])
//                 set.add(words[i])
//                 set.add(words[j])
//             }
            
//         }
//     }

//     return pairs
// }


//O(n)
// function semordnilap(words) {
//     let pairs = [];
//     let map = {};
//     let set = new Set();

//     for(let i = 0; i < words.length; i++) {
//         map[words[i]] = words[i].split("").reverse().join("")
//     }
//     console.log(map)
//     for(let i = 0; i < words.length; i++) {
//         if(words[i] === map[words[i].split("").reverse().join("")] && !set.has(words[i]) && !set.has(words[i].split("").reverse().join(""))){
//             pairs.push([words[i], map[words[i]]]);
//             set.add(words[i])
//             set.add(words[i].split("").reverse().join(""))
//         }
//     }
//     return pairs;
// }


//most efficient
function semordnilap(words) {
    let wordsSet = new Set(words);
    const pairs = [];

    for(const word of words) {
        const reverse = word.split("").reverse().join("");
        if(wordsSet.has(reverse) && reverse !== word){
            pairs.push([reverse, word]);
            wordsSet.delete(word);
            wordsSet.delete(reverse);
        }
    }

    return pairs
}




let words = ['diaper', 'abc','test','cba','repaid'] // [['diaper','repaid'],['abc','cba]]

console.log(semordnilap(words))