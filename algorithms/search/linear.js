const arr = [ 2, 1, 5, 6, 7, 12, 8 ];

const linearSearch = (arr, n) => {
  let res = -1;
  arr.forEach((element, i) => {
    if (element === n) {
      res = i;
    }
  });
  return res;
};

console.log(linearSearch(arr, 41));
