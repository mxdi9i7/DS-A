/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let record = new Set();
	let max = 0;
	let j = 0;
	let i = 0;

	while (j < s.length) {
		if (!record.has(s.charAt(j))) {
			record.add(s.charAt(j++));
			max = Math.max(max, record.size);
		} else {
			record.delete(s.charAt(i++));
		}
	}

	return max;
};
// @lc code=end
