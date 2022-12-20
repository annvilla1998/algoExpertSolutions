
//recursive solution
function powerset(array) {
  let result = [];

  function generateSet(path, index){
    result.push(path);

    for(let i = index; i < array.length; i++){
      generateSet([...path, array[i]], i + 1);
    }
  }
  
  generateSet([], 0)
  
  return result;
}

//iterative solution
// function powerset(array) {
//     let subsets = [[]];
  
//     for(let num of array) {
//       let currLength = subsets.length;
//       for(let i = 0; i < currLength;i++) {
//         subsets.push([...subsets[i], num]);
//       }
//     }
//     return subsets;
//   }

console.log(powerset([1,2,3]))