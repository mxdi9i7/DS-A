const solution = (A) => {
  let result = []
  for (let i = 0; i < A.length; i++) {
    let tempArr = []
    for (let j = A[i].length - 1; j >= 0; j--) {
      let currentItem = A[i][j]
      if (currentItem === 1) {
        currentItem = 0
      } else {
        currentItem = 1
      }
      tempArr.push(currentItem)
    }
    result.push(tempArr)
  }
  return result
}

const input = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]

console.log(solution(input))