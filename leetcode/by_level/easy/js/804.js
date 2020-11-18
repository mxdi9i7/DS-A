const morseList = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

const solution = (list) => {
  let result = []
  for (let i = 0; i < list.length; i++) {
    const charList = list[i].split('')
    let wordToMorse = []
    for (let j = 0; j < charList.length; j++) {
      const charCodeNum = charList[j].charCodeAt() - 97
      const morseCode = morseList[charCodeNum]
      wordToMorse.push(morseCode)
    }
    wordToMorse = wordToMorse.join('')
    if (!result.includes(wordToMorse)) result.push(wordToMorse)
  }
  return result
}

const input = ["gin", "zen", "gig", "msg"]

console.log(solution(input))
// solution(input)