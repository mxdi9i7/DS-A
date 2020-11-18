def solution(words, pattern):
  res = []
  for i in range(len(words)):
    pdict = {}
    wdict = {}
    flag = True
    for j in range(len(pattern)):
      if (wdict[words[i][j]] != pdict[pattern[j]]):
        flag = False
        break
      pdict[pattern[j]] = j
      wdict[words[i][j]] = j
    if flag == True: res.append(words[i])
  return res

input = ["abc", "deq", "mee", "aqq", "dkd", "ccc"]
pattern = 'abb'

print(solution(input, pattern))