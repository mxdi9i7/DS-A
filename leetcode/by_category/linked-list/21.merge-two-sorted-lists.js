/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  //   if (l1 === null) return l2;
  //   if (l2 === null) return l1;

  let res = new ListNode();
  let curr = res;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else if (l2.val > l1.val) {
      curr.next = l1;
      l1 = l1.next;
    }

    curr = curr.next;
  }

  curr.next = l1 === null ? l2 : l1;
  return res.next;
};
// @lc code=end
