/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let prev;
  //   while (head) {
  //     let next = head.next;
  //     head.next = prev;
  //     prev = head;
  //     head = next;
  //   }

  //   return prev;

  return appendNode(head, prev);
};

const appendNode = (curr, prev) => {
  if (curr) {
    let next = curr.next;
    curr.next = prev;
    return appendNode(next, curr);
  }
  return prev;
};

// @lc code=end
