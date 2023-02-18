class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
//Recursive solution
function mergeBinaryTrees(tree1, tree2) {
if(tree1 === null) return tree2;
if(tree2 === null) return tree1;

tree1.value += tree2.value;
tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
tree1.right = mergeBinaryTrees(tree1.right, tree2.right);  
return tree1;
}

//Iterative solution
function mergeBinaryTrees(tree1, tree2) {
    if(!tree1) return tree2;
  
    let tree1Stack = [tree1];
    let tree2Stack = [tree2];
  
    while(tree1Stack.length){
      let currNode1 = tree1Stack.pop();
      let currNode2 = tree2Stack.pop();
  
      if(currNode2 === null) continue;
  
      currNode1.value += currNode2.value;
      
      if(currNode1.left === null){
        currNode1.left = currNode2.left
      }else{
        tree1Stack.push(currNode1.left);
        tree2Stack.push(currNode2.left);
      }
  
      if(currNode1.right === null) {
        currNode1.right = currNode2.right;
      }else{
        tree1Stack.push(currNode1.right);
        tree2Stack.push(currNode2.right);
      }
    }
    return tree1;
  }