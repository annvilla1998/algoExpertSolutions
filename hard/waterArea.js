function waterArea(heights) {
    let maxes = new Array(heights.length).fill(0);
    let leftMax = 0;
    for(let i = 0; i < heights.length; i++){
      const height = heights[i];
      maxes[i] = leftMax;
      leftMax = Math.max(leftMax, height);
    }
    let rightMax = 0;
    console.log(heights, maxes)
    for(let i = heights.length - 1; i >= 0; i--){
      const height = heights[i];
      const minHeight = Math.min(rightMax, maxes[i]);
      if(height < minHeight){
        maxes[i] = minHeight - height;
      }else{
        maxes[i] = 0;
      }
      rightMax = Math.max(rightMax, height);
    }
  
    return maxes.reduce((a,b) => a + b, 0);
  }