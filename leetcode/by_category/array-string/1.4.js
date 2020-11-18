const solution = (s) => {
  const dict = {};
  let odd = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (/^[a-zA-Z()]+$/.test(char)) {
      if (dict[char]) {
        dict[char]++;
        if (dict[char] % 2 === 1) {
          odd++;
        } else {
          odd--;
        }
      } else {
        dict[char] = 1;
        odd++;
      }
    }
  }

  console.log(dict);

  return odd <= 1;
};

console.log(solution("AaBb//a"));
