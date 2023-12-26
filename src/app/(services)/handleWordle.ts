import { getDictionaryPt } from '../(repositories)/dictionary'

export function checkWord(word: string, secretWord: string) {
  if (word.length !== secretWord.length) {
    throw new Error(
      'The guessed word must have the same number of letters as the secret word.',
    )
  }

  const result = Array<string>(word.length).fill('gray')
  const secretWordCopy = secretWord.split('')
  const usedIndices = new Set<number>()

  // First pass: check for correct letters in the correct position (green)
  for (let i = 0; i < word.length; i++) {
    if (word[i] === secretWord[i]) {
      result[i] = 'green'
      usedIndices.add(i) // Mark the position as used
    }
  }

  // Second pass: check for correct letters in the wrong position (yellow)
  for (let i = 0; i < word.length; i++) {
    if (result[i] !== 'green') {
      for (let j = 0; j < secretWordCopy.length; j++) {
        if (word[i] === secretWordCopy[j] && !usedIndices.has(j)) {
          result[i] = 'yellow'
          usedIndices.add(j) // Mark this letter as used in the secret word
          break
        }
      }
    }
  }

  return result
}
