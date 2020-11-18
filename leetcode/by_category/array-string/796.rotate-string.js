/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (!A && !B) return true;
  if (A.length !== B.length) return false;
  let j = 0;
  let matched = 0;
  let round;

  for (let i = 0; i < A.length; j++) {
    console.log(i, j, round, matched);
    if (j === A.length) {
      if (!round) {
        j = 0;
        round = true;
      } else {
        return false;
      }
    }
    if (i === A.length) {
      i = 0;
    }
    if (A[i] !== B[j]) {
      matched = 0;
    } else {
      matched++;
      i++;
    }
  }
  return matched === A.length;
};
// @lc code=end

// const result = rotateString("bbbacddceeb", "ceebbbbacdd");
// console.log(result);
