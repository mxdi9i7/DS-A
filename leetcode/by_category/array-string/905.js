var sortArrayByParity = function (A) {
	let write = 0;

	for (read = 0; read < A.length; read++) {
		if (A[read] % 2 === 0) {
			const temp = A[write];
			A[write] = A[read];
			if (read !== write) {
				A[read] = temp;
			}
			write++;
		}
	}

	return A;
};

sortArrayByParity([3, 1, 2, 4]);
