// interative very slow
const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1]
    const next = arr[i + 1]
    const current = arr[i]
    if (prev < current && current > next) {
      return i
    }
  }
}


const input = [0, 1, 0]
console.log(solution(input))