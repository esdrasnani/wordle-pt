import SquareLetter from './SquareLetter'

interface WordProps {
  letterIndex: number
  currentWord: string[]
  result: string[]
  isWordActive: boolean
}

export default function Word({
  letterIndex,
  currentWord,
  result,
  isWordActive,
}: WordProps) {
  return (
    <div className="mb-1 flex">
      {currentWord.map((letter, i) => (
        <SquareLetter
          key={i}
          result={result[i]}
          letter={letter}
          isLetterActive={i === letterIndex}
          isWordActive={isWordActive}
        />
      ))}
    </div>
  )
}
