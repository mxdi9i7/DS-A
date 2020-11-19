/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let lengthA = 0;
  let lengthB = 0;
  let pointerA = headA;
  let pointerB = headB;

  while (pointerB || pointerA) {
    if (pointerA) {
      lengthA++;
      pointerA = pointerA.next;
    }
    if (pointerB) {
      lengthB++;
      pointerB = pointerB.next;
    }
  }

  if (lengthA === lengthB) {
    while (headA && headB) {
      if (headA === headB) {
        return headA;
      } else {
        headA = headA.next;
        headB = headB.next;
      }
    }
  } else if (lengthA < lengthB) {
    let difference = lengthB - lengthA;
    while (headA && headB) {
      if (difference > 0) {
        headB = headB.next;
        difference--;
      } else {
        if (headA === headB) {
          return headA;
        } else {
          headA = headA.next;
          headB = headB.next;
        }
      }
    }
  } else {
    let difference = lengthA - lengthB;
    while (headA && headB) {
      if (difference > 0) {
        headA = headA.next;
        difference--;
      } else {
        if (headA === headB) {
          return headA;
        } else {
          headA = headA.next;
          headB = headB.next;
        }
      }
    }
  }

  return null;

  // ----------- Alternative solution (faster, but harder to understand)
  //   if (!headA || !headB) return null
  //   let l1 = headA, l2 = headB
  //   while (l1 != l2) {
  //       l1 = l1 == null ? headB :  l1.next;
  //       l2 = l2 == null ? headA :  l2.next;
  //   }
  //   return l1
};
// @lc code=end
