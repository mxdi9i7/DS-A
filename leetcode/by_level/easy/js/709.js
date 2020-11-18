const solution = (str) => {
  let list = str.split('')
  let result = []
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    let charCode = item.charCodeAt()
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32
    }
    console.log(charCode)
    result.push(String.fromCharCode(charCode))
  }
  return result.join('')
}

console.log(solution('Hello'))