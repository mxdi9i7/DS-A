const solution = (str) => {
  let count = 1;
  let result = "";
  for (let i = 1; i <= str.length; i++) {
    if (!str[i] || str[i] !== str[i - 1]) {
      result += `${str[i - 1]}${count}`;
      count = 1;
    } else {
      count++;
    }
  }
  if (result.length >= str.length) {
    return result;
  } else {
    return str;
  }
};

// O(n) or O(n + k^2) because of string concatenation is k square
// O(n) but could potentional be O(1) if i do this in-place, which will potentially take more time

console.log(solution("aabcccccaaa"));
