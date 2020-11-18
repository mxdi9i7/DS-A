const solution = (arr) => {
  let D = 0;
  for (let i = 0; i < arr[0].length; i++) {
    let tempArr = []
    let decreased = 0
    for (let j = 0; j < arr.length; j++) {
      tempArr.push(arr[j].split('')[i])
    }
    for (let k = 0; k < tempArr.length - 1; k++) {
      if (tempArr[k + 1].charCodeAt() < tempArr[k].charCodeAt()) {
        decreased++
      }
    }
    if (decreased > 0) D++
  }
  return D
}

const input =
  ["cba", "daf", "ghi"]

console.log(solution(input))