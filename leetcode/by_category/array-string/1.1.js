// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structure?

const solution = (str) => {
  if (str.length > 128) return false;
  const alphabet = new Array(128);
  for (let i = 0; i < str.length; i++) {
    const alphabetIndex = str.charCodeAt(i);
    if (alphabet[alphabetIndex]) {
      return false;
    } else {
      alphabet[alphabetIndex] = true;
    }
  }
  return true;
};

console.log(solution("aabcd"));

// time complexity = O(1)
