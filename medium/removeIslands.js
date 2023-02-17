function removeIslands(matrix) {
    let visited = new Set();
  
    for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix[0].length; col++){
        if(matrix[row][col] === 0 || visited.has([row,col].toString())){
          continue;
        }
        
        let stack = [[row,col]];
        visited.add([row,col].toString());
        let currIsland = [];
        
        while(stack.length){
          let currNode = stack.pop();
          currIsland.push(currNode);
  
          let neighbors = findNeighbors(currNode,matrix);
  
          for(let neighbor of neighbors){
            if(!visited.has(neighbor.toString())){
              visited.add(neighbor.toString());
              stack.push(neighbor);
            }
          }
        }
        
        if(currIsland.every(el => nodeIsValid(el,matrix))){
          for(let node of currIsland){
            matrix[node[0]][node[1]] = 0;
          }
        }
        
      }
    }
  
    
    return matrix;
  }
  
  //Finds all  neighbors of a node
  function findNeighbors(node, matrix){
    let neighbors = [];
    let [row, col] = node;
  
    if(row > 0 && matrix[row - 1][col] === 1){
      neighbors.push([row - 1, col]);
    }
  
    if(col > 0 && matrix[row][col - 1] === 1){
      neighbors.push([row, col - 1]);
    }
  
    if(row < matrix.length - 1 && matrix[row + 1][col] === 1){
      neighbors.push([row + 1, col]);
    }
  
    if(col < matrix[0].length - 1 && matrix[row][col + 1] === 1){
      neighbors.push([row, col + 1]);
    }
  
    return neighbors;
  }
  
  //Returns true if node should be removed
  function nodeIsValid(node, matrix){
    let [row,col] = node;
  
    return row > 0 && row < matrix.length - 1 && col < matrix[0].length - 1 && col > 0; 
  }