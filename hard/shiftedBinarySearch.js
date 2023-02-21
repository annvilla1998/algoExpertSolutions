function shiftedBinarySearch(array, target) {
    let idx = 0;
    let endIdx;
    for(let i = 1; i < array.length; i++){
      if(array[i] < array[i - 1]){
        idx = i;
        if(target > array[array.length - 1]){
          idx = 0;
          endIdx = i - 1;
        }
        break;
      }
    }
    
    let mid;
    if(endIdx === undefined){
      endIdx = array.length - 1;
    }
  
    while(endIdx >= idx){
      mid = Math.floor((idx + endIdx) / 2); 
      if(array[mid] === target){
        return mid;
      }else if(target > array[mid]){
        idx = mid + 1;
      }else{
        endIdx = mid - 1;
      }
    }
    return -1;
  }