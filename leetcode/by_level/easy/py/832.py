def solution(A):
  result = []
  for i in range(len(A)):
    tempArr = []
    for j in range(len(A[i]) - 1, -1, -1):
      currentItem = A[i][j]
      if currentItem == 1:
        currentItem = 0
      else:
        currentItem = 1
      tempArr.append(currentItem)
    result.append(tempArr)
  return result

input = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
print(solution(input))