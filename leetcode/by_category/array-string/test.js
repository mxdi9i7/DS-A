const removeDup = (nums) => {
	for (let i = 0; i <= nums.length - 2; i++) {
		for (let j = i + 1; j <= nums.length - 1; j++) {
			if (nums[i] == nums[j]) {
				nums.splice(j, 1);
				j--;
			} else break;
		}
	}
	return nums; //?
};
const arr2 = [0, 1, 1, 1, 2, 3, 3, 3, 4];
console.log(removeDup(arr2));
