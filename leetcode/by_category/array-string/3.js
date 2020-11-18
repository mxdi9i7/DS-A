var lengthOfLongestSubstring = function (s) {
	let record = [];
	let max = 0;

	for (let i = 0; i < s.length; i++) {}

	s.forEach((v) => {
		if (record.includes(v)) {
			max = record.length > max ? record.length : max;
			record = [];
		} else {
			record.push(v);
		}
	});
	return max;
};
