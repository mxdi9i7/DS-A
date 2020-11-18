const solution = (str) => {
  let res = "";
  for (let i = str.length; i >= 0; i--) {
    if (str.charAt(i) === " ") {
      res = "%20" + res;
    } else {
      res = str.charAt(i) + res;
    }
  }
};

console.log(solution("  pete r  "));
