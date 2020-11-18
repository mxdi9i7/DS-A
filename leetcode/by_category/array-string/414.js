var thirdMax = function (nums) {
	let l1 = -Infinity,
		l2 = -Infinity,
		l3 = -Infinity;

	nums.forEach((num) => {
		if (num !== l1 && num !== l2 && num !== l3) {
			if (num < l2 && num > l3) {
				l3 = num;
			} else if (num > l2 && num < l1) {
				l3 = l2;
				l2 = num;
			} else if (num > l1) {
				l3 = l2;
				l2 = l1;
				l1 = num;
			}
		}
	});

	console.log(l1, l2, l3);
	if (nums.length < 3 || l3 === -Infinity) {
		return l1;
	}
	return l3;
};

thirdMax([1, 1, 2]); //?
