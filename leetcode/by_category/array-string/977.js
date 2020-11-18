var sortedSquares = function (A) {
	const len = A.length;
	const res = Array(len);
	let start = 0;
	let end = len - 1;
	for (let i = len - 1; i >= 0; i--) {
		const square1 = A[start] * A[start];
		const square2 = A[end] * A[end];
		if (square1 > square2) {
			res[i] = square1;
			start++;
		} else {
			res[i] = square2;
			end--;
		}
	}

	return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
