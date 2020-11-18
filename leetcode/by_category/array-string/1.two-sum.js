/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	if (nums.length === 2) return [1, 0];
	const memo = {};
	let result = [];
	nums.forEach((element, i) => {
		const lookingFor = target - element;
		if (memo[lookingFor] !== undefined) {
			result = [i, memo[lookingFor]];
		}
		memo[element] = i;
	});
	return result;
};
// @lc code=end
