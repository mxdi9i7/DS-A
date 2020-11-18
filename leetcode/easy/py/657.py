def solution(A):
  up = 0
  down = 0
  left = 0
  right = 0
  movesList = list(A)
  for move in movesList:
    if move == 'U':
      up += 1
    if move == 'D':
      down += 1
    if move == 'L':
      left += 1
    if move == 'R':
      right += 1
    
  if (abs(up) == abs(down) and abs(left) == abs(right)):
    return True
  return False

  
input = 'UD'

print(solution(input))