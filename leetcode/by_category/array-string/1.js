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

twoSum([2, 7, 11, 15], 9); //?
