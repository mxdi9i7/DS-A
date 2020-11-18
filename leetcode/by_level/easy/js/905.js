const solution = (A) => {
  const even = []
  const odd = []
  for (let i = 0; i < A.length; i++) {
    const item = A[i]
    if (item !== 0) {
      if (item % 2 === 0) {
        even.push(item)
      } else {
        odd.push(item)
      }
    }
  }
  if (A.includes(0)) {
    return even.concat(0, odd)
  }
  return even.concat(odd)
}

console.log(solution([3, 1, 2, 4, 0]))
