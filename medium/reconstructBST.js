class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function reconstructBst(preOrderTraversalValues) {
    if(preOrderTraversalValues.length === 0) return null;
  
    const currVal = preOrderTraversalValues[0];
    let rightSubtreeRootIdx = preOrderTraversalValues.length;
  
    //1. loop through array of numbers
    for(let i = 1; i < preOrderTraversalValues.length; i++){
       const val = preOrderTraversalValues[i];
  
        if(val >= currVal) {
          rightSubtreeRootIdx = i;
          break;
        }
    }
  
    const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx))
    const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx))
    
    return new BST(currVal, leftSubtree, rightSubtree);
  }