class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function nodeSwap(head) {
  if(!head || !head.next) return head;

  const nextNode = head.next;
  head.next = nodeSwap(head.next.next);
  nextNode.next = head;
  return nextNode;
}