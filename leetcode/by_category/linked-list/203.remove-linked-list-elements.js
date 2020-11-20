/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return null;
  }

  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head) {
    if (head.val === val) {
      prev.next = head.next;
      head = head.next;
    } else {
      prev = head;
      head = head.next;
    }
  }

  return dummy.next;
};
// @lc code=end
