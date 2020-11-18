def Solution(words):
  morseList = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  result = []
  for word in words:
    charList = list(word)
    wordToMorse = []
    for character in charList:
      charCodeNum = ord(character) - 97
      morseCode = morseList[charCodeNum]
      wordToMorse.append(morseCode)
    s = ''
    wordToMorse = s.join(wordToMorse)
    if wordToMorse not in result:
        result.append(wordToMorse)
  return len(result)

print(Solution(["gin", "zen", "gig", "msg"]))