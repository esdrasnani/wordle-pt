import { MutableRefObject, SetStateAction } from 'react'
import { checkWord } from './handleWordle'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SetAtom<Args extends any[], Result> = (...args: Args) => Result

export function handleLetterPress(
  letter: string,
  currentLetterIndex: MutableRefObject<{
    x: number
    y: number
  }>,
  setLetterGrid: SetAtom<[SetStateAction<string[][]>], void>,
) {
  console.log('Current Grid Index', currentLetterIndex.current)
  if (currentLetterIndex.current.x < 5) {
    setLetterGrid((prev) => {
      const newGrid = [...prev]

      newGrid[currentLetterIndex.current.y][currentLetterIndex.current.x] =
        letter.toLocaleUpperCase()

      console.table(newGrid)

      return newGrid
    })

    currentLetterIndex.current = {
      ...currentLetterIndex.current,
      x:
        currentLetterIndex.current.x < 4
          ? currentLetterIndex.current.x + 1
          : currentLetterIndex.current.x,
      y: currentLetterIndex.current.y,
    }
  } else {
    console.log('Word Fullfilled')
  }
}

export function handleBackspace(
  currentLetterIndex: MutableRefObject<{
    x: number
    y: number
  }>,
  setLetterGrid: SetAtom<[SetStateAction<string[][]>], void>,
) {
  console.log('Current Grid Index', currentLetterIndex.current)
  setLetterGrid((prev) => {
    const newGrid = [...prev]

    newGrid[currentLetterIndex.current.y][currentLetterIndex.current.x] = ''

    console.table(newGrid)

    return newGrid
  })

  currentLetterIndex.current = {
    ...currentLetterIndex.current,
    x:
      currentLetterIndex.current.x > 0
        ? currentLetterIndex.current.x - 1
        : currentLetterIndex.current.x,
    y: currentLetterIndex.current.y,
  }
}

export function handleEnter(
  currentWordLetters: string[],
  secretWord: string,
  currentLetterIndex: MutableRefObject<{
    x: number
    y: number
  }>,
  setLetterGrid: SetAtom<[SetStateAction<string[][]>], void>,
  setResultGrid: SetAtom<[SetStateAction<string[][]>], void>,
) {
  const currentWord = currentWordLetters.join('')
  const result = checkWord(currentWord, secretWord)

  setResultGrid((prev) => {
    const newGrid = [...prev]

    newGrid[currentLetterIndex.current.y] = result

    console.table(newGrid)

    return newGrid
  })

  if (currentLetterIndex.current.y < 5) {
    currentLetterIndex.current = {
      ...currentLetterIndex.current,
      x: 0,
      y: currentLetterIndex.current.y + 1,
    }

    setLetterGrid((prev) => {
      return [...prev]
    })
  } else {
    console.log('Game Over')
    console.log('Secret Word', secretWord)
  }
}
