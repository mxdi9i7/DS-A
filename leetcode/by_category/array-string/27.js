var removeElement = function (nums, val) {
	let i = 0;
	while (i < nums.length) {
		const num = nums[i];
		if (num === val) {
			removeItemFromIndex(i, nums);
		}
		if (nums[i] !== val) {
			i++;
		}
	}
	return nums.length;
};

const removeItemFromIndex = (index, arr) => {
	while (index < arr.length - 1) {
		arr[index] = arr[index + 1];
		index++;
	}
	arr.pop();
	return arr;
};

const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

result; //?
