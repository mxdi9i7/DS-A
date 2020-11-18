const solution = (matrix) => {
  const rows = {};
  const col = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        col[j] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

console.log(
  solution([
    [1, 2, 0, 4],
    [2, 1, 1, 0],
    [4, 1, 2, 1],
  ])
);

// O(2mn) or O(nm) time
// O(m+n) because we need an something to keep track of col and row to nullify, can be a bit more space efficient if we use vector to keep track instead
