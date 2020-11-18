
def numUniqueEmails(emails):
    uniqueEmails = []
    for email in emails:
      indexOfSign = email.index('@')
      localName = email[slice(indexOfSign)]
      rest = email[slice(indexOfSign, len(email), 1)]
      result = ''
      if localName.find('+') != -1:
        result = localName[slice(localName.find('+'))]
      if result.find('.') != -1:
        result = result.replace('.', '')
      result = result.join(rest)

      if result not in uniqueEmails:
        uniqueEmails.append(result)
    return len(uniqueEmails)

input = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

numUniqueEmails(input)