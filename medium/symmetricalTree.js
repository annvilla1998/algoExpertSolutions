class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
//Iterative solution  
  function symmetricalTree(tree) {
  
    let leftStack = [tree.left];
    let rightStack = [tree.right];
  
    while(leftStack.length){
      let currLeft = leftStack.pop();
      let currRight = rightStack.pop();
  
      if(currLeft === null && currRight === null){
        continue;
      }
      
      if(currLeft === null
        || currRight === null
        || currLeft.value !== currRight.value){
        return false;
      }
  
        leftStack.push(currLeft.left);
        leftStack.push(currLeft.right);
        rightStack.push(currRight.right);
        rightStack.push(currRight.left);
    }
    
    return true;
  }
  

//Resursive Solution

function symmetricalTree(tree) {
    return treesAreMirrored(tree.left, tree.right)
  }
  
  function treesAreMirrored(left, right){
    if(left !== null && right !== null && left.value === right.value){
      return treesAreMirrored(left.left, right.right) && treesAreMirrored(left.right, right.left);
    }
  
    return left === right;
  }