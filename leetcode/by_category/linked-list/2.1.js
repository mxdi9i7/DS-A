const solution = (head) => {
  const set = new Set();
  let current = head;
  while (current.next) {
    if (set.contains(current.next.val)) {
      current.next = current.next.next;
    } else {
      set.add(current.next.val);
    }
    current = current.next;
  }
  return head;
};
