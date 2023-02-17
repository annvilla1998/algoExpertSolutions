class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function heightBalancedBinaryTree(tree) {
    
    let stack = [tree];
  
  
    while(stack.length){
      let currNode = stack.pop();
  
      if(Math.abs(getHeight(currNode.left) - getHeight(currNode.right)) <= 1){
        if(currNode.left){
          stack.push(currNode.left);
        } 
        if(currNode.right){
          stack.push(currNode.right);
        } 
      }else{
        return false
      }
      
    }
  
    return true;
  }
  
  function getHeight(root){
    if(!root) return -1;
    if(!root.left && !root.right) return 0;
  
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
  }