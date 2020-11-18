var checkIfExist = function (arr) {
	const map = {};
	arr.forEach((num) => (map[num] = num));

	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i] / 2] || map[arr[i] * 2]) {
			return true;
		}
		map[arr[i]] = true;
	}
	return false;
};

checkIfExist([10, 2, 5, 3]); //?
