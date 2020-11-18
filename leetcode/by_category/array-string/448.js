var findDisappearedNumbers = function (nums) {
	const sorted = [];
	let count = 0;

	for (let i = 1; i <= nums.length; i++) {
		sorted.push(i);
	}

	console.log(sorted);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] - 1 < sorted.length - 1) {
			// count++; //?
			removeItemFromArray(nums[i] - 1, sorted);
			sorted; //?
		}
	}

	// for (let i = 0; i <= count; i++) {
	// 	sorted.pop();
	// }

	return sorted;
};

const removeItemFromArray = (index, arr) => {
	for (let i = index; i < arr.length; i++) {
		arr[i] = null;
	}
	arr; //?
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); //?
