var replaceElements = function (arr) {
	if (arr.length === 1) return [-1];
	let max = arr[arr.length - 1];
	arr[arr.length - 1] = -1;
	for (let i = arr.length - 2; i >= 0; i--) {
		if (arr[i] > max) {
			let temp = arr[i];
			arr[i] = max;
			max = temp;
		} else {
			arr[i] = max;
		}
	}
	return arr;
};

replaceElements([17, 18, 5, 4, 6, 1]); //?
