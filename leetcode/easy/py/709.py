def Solution(str):
  result = []
  strList = list(str)
  for character in strList:
    codeNum = ord(character)
    if (codeNum >= 65 and codeNum <= 90):
      codeNum += 32
    result.append(chr(codeNum))

  s = ''  
  return s.join(result)

print(Solution('Hello'))
