/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //   let length = 0;
  //   let curr = head;

  //   while (curr) {
  //     length++;
  //     curr = curr.next;
  //   }

  //   length = length - n;

  //   const dummy = new ListNode(0);

  //   dummy.next = head;
  //   curr = dummy;
  //   while (length > 0) {
  //     length--;
  //     curr = curr.next;
  //   }
  //   curr.next = curr.next.next;

  //   return dummy.next;

  // Another solution, maintain 2 pointers, keep them n nodes apart, when second pointer gets to the end, the first pointer would be the node to remove.
  // 1 pass

  const dummy = new ListNode(0);
  dummy.next = head;
  let count = n;

  let first = dummy;
  let second = dummy;
  while (count >= 0) {
    first = first.next;
    count--;
  }
  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
};
// @lc code=end
