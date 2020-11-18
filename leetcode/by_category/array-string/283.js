var moveZeroes = function (nums) {
	let write = 0;
	for (let read = 0; read < nums.length; read++) {
		if (nums[read] !== 0) {
			nums[write] = nums[read];
			if (read !== write) nums[read] = 0;
			write++;
		}
	}
	return nums;
};

console.log(moveZeroes([1])); //?
