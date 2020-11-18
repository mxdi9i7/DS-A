def solution(A):
  if len(A) == 0:
    return 0
  D = 0

  for y in range(len(A[0])):
    for x in range(len(A) - 1):
      if A[x][y] > A[x+1][y]:
        D = D + 1
        break
  
  return D

input = ["cba","daf","ghi"]

print(solution(input))