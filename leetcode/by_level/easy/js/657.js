const solution = (moves) => {
  let up = 0, down = 0, left = 0, right = 0
  moves.split('').map(move => {
    switch (move) {
      case 'U':
        up++;
        break;
      case 'D':
        down++;
        break;
      case 'L':
        left++;
        break;
      case 'R':
        right++;
        break;
      default:
        return false
    }
  })
  if (
    Math.abs(up) === Math.abs(down) &&
    Math.abs(left) === Math.abs(right)
  ) {
    return true
  }
  return false
}

const input = 'UD'

console.log(solution(input))