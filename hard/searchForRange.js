function searchForRange(array, target) {
    let finalRange = [-1,-1];
    alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true, false);
    alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false, true);
    return finalRange;
  }
  
  function alteredBinarySearch(array, target, start, end, finalRange, goLeft, goRight){
    while(end >= start){
      let mid = Math.floor((start + end) / 2);
  
      if(array[mid] < target){
        start = mid + 1;
      }else if(array[mid] > target){
        end = mid - 1;
      }else{
        if(goLeft){
          if(mid === 0 || array[mid - 1] !== target){
            finalRange[0] = mid;
            return;
          }else{
            right = mid - 1;
          }
        }else{
          if(mid === array.length - 1 || array[mid + 1] !== target){
            finalRange[1] = mid;
            return
          }else{
            left = mid + 1;
          }
        }
      }
    }
  }
  