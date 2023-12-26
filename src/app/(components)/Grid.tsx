'use client'

import { useAtom } from 'jotai'
import Word from './Word'
import { gridAtom, resultGridAtom } from '../(atoms)/atoms'
import { useEffect, useRef } from 'react'
import {
  handleBackspace,
  handleEnter,
  handleLetterPress,
} from '../(services)/handleKeysPress'

export default function Grid({ secretWord }: { secretWord: string }) {
  const [letterGrid, setLetterGrid] = useAtom(gridAtom)
  const [resultGrid, setResultGrid] = useAtom(resultGridAtom)
  const currentLetterIndex = useRef({ x: 0, y: 0 }) // Using useRef instead of useState

  useEffect(() => {
    function handleKeyDown(event: { key: string }) {
      if (event.key.match(/^[A-Za-z]$/)) {
        handleLetterPress(event.key, currentLetterIndex, setLetterGrid)
      } else if (event.key === 'Backspace') {
        handleBackspace(currentLetterIndex, setLetterGrid)
      } else if (event.key === 'Enter') {
        let wordLength = 0
        letterGrid[currentLetterIndex.current.y].forEach((letter) => {
          if (letter !== '') {
            wordLength++
          }
        })
        if (wordLength === 5) {
          console.log('Word is 5 letters long')
          console.log(currentLetterIndex.current.x)
          const currentWord = letterGrid[currentLetterIndex.current.y]
          handleEnter(
            currentWord,
            secretWord,
            currentLetterIndex,
            setLetterGrid,
            setResultGrid,
          )
        }
      }
    }

    // Add event listener
    window.addEventListener('keydown', handleKeyDown)

    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="">
      {Array.from({ length: 6 }).map((_, i) => (
        <Word
          key={i}
          letterIndex={currentLetterIndex.current.x}
          currentWord={letterGrid[i]}
          result={resultGrid[i]}
          isWordActive={i === currentLetterIndex.current.y}
        />
      ))}
    </div>
  )
}
