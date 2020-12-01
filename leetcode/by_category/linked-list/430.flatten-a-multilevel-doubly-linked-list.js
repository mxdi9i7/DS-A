/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head;

  const stack = [];
  const dummy = new ListNode();

  let curr;
  let prev = dummy;

  stack.push(head);

  while (stack.length) {
    curr = stack.pop();
    prev.next = curr;
    curr.prev = prev;

    if (curr.next) {
      stack.push(curr.next);
    }
    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }

    prev = curr;
  }

  dummy.next.prev = null;

  return dummy.next;
};
// @lc code=end
