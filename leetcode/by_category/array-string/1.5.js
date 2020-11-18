const solution = (str1, str2) => {
  let diff = 0;
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        diff++;
      }
    }
  } else if (Math.abs(str2.length - str1.length) === 1) {
    let long, short;
    if (str2.length > str1.length) {
      long = str2;
      short = str1;
    } else {
      long = str1;
      short = str2;
    }
    let j = 0;
    for (let i = 0; i < long.length; i++) {
      if (long[i] !== short[j]) {
        if (diff > 1) return false;
        diff++;
      } else {
        j++;
      }
    }
  } else {
    return false;
  }
  return diff <= 1;
};

// apple
// aple

console.log(solution("apple", "aplessssssssss"));
