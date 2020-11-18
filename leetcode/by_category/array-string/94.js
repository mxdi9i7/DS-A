var validMountainArray = function (A) {
	if (!A || A.length < 3) return false;
	let isUp = true;
	let max;
	for (let i = 1; i < A.length; i++) {
		if (A[i] < A[i - 1]) {
			if (i === 1) {
				return false;
			}
			isUp = false;
			max = A[i - 1];
		} else {
			if (max) {
				return false;
			}
			isUp = true;
		}
	}
	return isUp === false;
};

validMountainArray([3, 5, 5]); //?
