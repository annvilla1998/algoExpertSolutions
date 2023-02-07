class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLength(head){
  let length = 0;

  let curr = head;
  while(curr){
    length++;
    curr = curr.next;
  }

  return length;
}

function shiftLinkedList(head, k) { 
  
  let length = findLength(head);
  let targetIdx = Math.abs(k) % length;
  if(targetIdx === 0) return head;

  let newPos = k > 0 ? length - targetIdx : targetIdx;
  let prev = null;
  let curr = head;
  while(newPos !== 0){
    prev = curr;
    curr = curr.next;
    newPos--;
  }
  
  let newHead = curr;
  prev.next = null;
  
  while(curr.next){
    curr = curr.next;
  }
  curr.next = head;

  return newHead;
}
