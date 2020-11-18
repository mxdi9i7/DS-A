const solution = (head, k) => {
  const arr = [];

  while (head) {
    arr.push(head);
    head = head.next;
  }

  return arr.lastIndexOf(k);
};
