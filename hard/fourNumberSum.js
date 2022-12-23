//Write a function that takes in a non-empty array of distinct
//integers and an integer representing a target sum.
//The function should find all quadruplet in the array
//that sum up to the target sum and return a two-dimentional array
//of all these quadruplets in no particular order. If no four
// numbers sum up to the target sum, the function should return an empty array.



function fourNumberSum(array, targetSum) {
    const allNumberPairs = {};
    const quadruplets = [];
    for(let i = 1; i < array.length - 1; i++) {
        for(let j = i + 1; j < array.length; j++) {
            let currentSum = array[i] + array[j];
            let difference = targetSum - currentSum;
            if(difference in allNumberPairs) {
                for(const pair of allNumberPairs[difference]){
                    quadruplets.push(pair.concat([array[i], array[j]]));
                }
            }
        }
        for(let k = 0; k < i; k++){
            let currentSum = array[k] + array[i];
            if(!(currentSum in allNumberPairs)){
                allNumberPairs[currentSum] = [[array[k], array[i]]]
            }else{
                allNumberPairs[currentSum].push([array[k], array[i]])
            }
        }
    }
    return quadruplets;
}


let array = [7,6,4,-1,1,2]
let target = 16

console.log(fourNumberSum(array, target)) // [[7,6,4,-1], [7,6,1,2]]