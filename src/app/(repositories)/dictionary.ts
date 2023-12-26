export async function getDictionaryPt() {
  const response = await fetch('https://www.ime.usp.br/~pf/dicios/br-utf8.txt')

  const responseBody = await response.text()

  const fullWordList = responseBody.split('\n')

  const wordList = fullWordList.filter((word) => {
    return word.length === 5 && word[0] !== word[0].toUpperCase()
  })

  return wordList
}
