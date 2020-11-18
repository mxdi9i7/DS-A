const solution = (S) => {
  return check(Array.from(Array(S.length + 1).keys()), S)
}

const check = (arr, str) => {
  let arrResult = arr
  let flag = true
  for (let i = 0; i < arrResult.length - 1; i++) {
    const temp = arrResult[i]
    if (str[i] === 'I') {
      if (temp > arrResult[i + 1]) {
        flag = false
        arrResult[i] = arrResult[i + 1]
        arrResult[i + 1] = temp
      }
    } else {
      if (temp < arrResult[i + 1]) {
        flag = false
        arrResult[i] = arrResult[i + 1]
        arrResult[i + 1] = temp
      }
    }
  }
  if (flag) {
    return arrResult
  }
  return check(arrResult, str)
}

console.log(solution('DDD'))