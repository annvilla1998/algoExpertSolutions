class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    // loop through each list and compare the two values
    // only iterate headOne when its value is less than or equal to 
    // curr2 
    // keep track of prev so we can set the new nodes next property to curr 
    // and prev next to equal the new one
  
    let currOne = headOne;
    let currTwo = headTwo;
    let prev = null;
    while(currOne && currTwo){
      if(currTwo.value <= currOne.value){
        if(prev !== null) prev.next = currTwo;
        prev = currTwo;
        currTwo = currTwo.next;
        prev.next = currOne;
      }else{
        prev = currOne;
        currOne = currOne.next;
      }
    }
  
    if(currOne === null) prev.next = currTwo;
    // console.log(JSON.stringify(headOne,2,null))
    return headOne.value < headTwo.value ? headOne : headTwo;
  }