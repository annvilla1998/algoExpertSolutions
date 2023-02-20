function oneEdit(stringOne, stringTwo) {
    let lengthOne = stringOne.length;
    let lengthTwo = stringTwo.length;
    if(Math.abs(lengthOne - lengthTwo) > 1) return false;
  
    let madeEdit = false;
    let idxOne = 0;
    let idxTwo = 0;
  
    while(idxOne < lengthOne && idxTwo < lengthTwo){
        if(stringOne[idxOne] !== stringTwo[idxTwo]){
          if(madeEdit) return false;
          madeEdit = true;
  
          if(lengthOne > lengthTwo){
            idxOne++;
          }else if (lengthTwo > lengthOne){
            idxTwo++;
          }else{
            idxOne++;
            idxTwo++;
          }
        }else {
          idxOne++;
          idxTwo++;
        }
    }
    return true;
  }