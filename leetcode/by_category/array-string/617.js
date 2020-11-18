function solution(A) {
  if (A.length === 0) {
    return 1;
  }
  const max = Math.max(...A);
  if (max < 0) {
    return 1;
  } else {
    for (let i = 1; i <= max; i++) {
      if (!A.includes(i)) {
        return i;
      }
    }
    return max + 1;
  }
}

// console.log(solution([1, 2, 3]));

// console.log(solution([-1, -3]));

// console.log(solution([1, 3, 6, 4, 1, 2]));

console.log(solution([3, 4, -1, 1]));
