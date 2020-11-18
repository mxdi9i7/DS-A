const solution = (emails) => {
  let uniqueEmails = [];
  emails.forEach(email => {
    const localName = email.split('@')[0]
    const domainName = email.split('@')[1]

    const cleanEmail = (name, domain) => {
      let result;
      if (name.indexOf('+') !== -1) {
        result = name.substring(0, name.indexOf('+'))
      }
      if (result.includes('.')) {
        result = result.split('.').join('')
      }
      return `${result}@${domain}`
    }

    const emailToCheck = cleanEmail(localName, domainName)

    if (!uniqueEmails.includes(emailToCheck)) {
      return uniqueEmails.push(emailToCheck)
    }
  });
  return uniqueEmails
}

const input = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]

console.log(solution(input))
// solution(input)