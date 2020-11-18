const solution = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const alphabet = new Array(128);
  for (let i = 0; i < str1.length; i++) {
    if (alphabet[str1.charCodeAt(i)]) {
      alphabet[str1.charCodeAt(i)] = alphabet[str1.charCodeAt(i)] + 1;
    } else {
      alphabet[str1.charCodeAt(i)] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (alphabet[str2.charCodeAt(i)]) {
      alphabet[str2.charCodeAt(i)] = alphabet[str2.charCodeAt(i)] - 1;
    } else {
      return false;
    }
  }

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i]) {
      return false;
    }
  }

  return true;
};

console.log(solution("dodgg", "goddd"));

// time complexity: O(n) where n is str1's length
// space complexity: O(1)
