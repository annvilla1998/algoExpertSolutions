class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    if(isDescendent(nodeTwo,nodeOne)){
      return isDescendent(nodeThree, nodeTwo);
    }
  
    if(isDescendent(nodeTwo, nodeThree)){
      return isDescendent(nodeOne, nodeTwo);
    }
    return false;
  }
  
  function isDescendent(node, target){
    if(node === null) return false;
  
    if(node === target) return true;
  
    return target.value < node.value ? isDescendent(node.left, target) : isDescendent(node.right, target);
  }
  