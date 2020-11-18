const permutation = (str, prefix) => {
  console.log(`new str is: ${str}`);
  console.log(`new prefix is: ${prefix}`);
  if (str.length == 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1); //?

      console.log(`rem is: ${rem}`, `prefix is: ${prefix}`);

      permutation(rem, prefix + str.charAt(i));
    }
  }
};

let n = 95;
console.log(n % 10);
console.log((n /= 10));
console.log(4 % 10);

let test = "o";

test.substring(0, 0) + test.substring(2); //?

permutation("how", "");
