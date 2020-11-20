/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // step 1: use 2 pointers to find middle of linked list (slow)
  if (!head) return true;

  let slow = head,
    fast = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let halfHead = slow.next;

  // step 2: flip the second half of linked list (starting at slow)
  let reversedHead = reverseList(halfHead);

  // step 3: compare first half and second half by iterating 2 pointers

  let reversedCurr = reversedHead;
  let result = true;

  while (reversedCurr) {
    if (reversedCurr.val !== head.val) {
      result = false;
    }
    reversedCurr = reversedCurr.next;
    head = head.next;
  }
  // step 4: flip the order of second half back to original
  slow.next = reverseList(reversedHead);

  return result;
};

const reverseList = (head) => {
  if (!head) return null;
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
// @lc code=end
