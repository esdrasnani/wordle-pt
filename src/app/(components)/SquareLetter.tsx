interface SquareLetterProps {
  letter: string
  isLetterActive: boolean
  isWordActive: boolean
  result: string
}

export default function SquareLetter({
  letter,
  isLetterActive,
  isWordActive,
  result,
}: SquareLetterProps) {
  return (
    <div
      className={`ml-1 flex h-16 w-16 items-center justify-center rounded-lg border-2 border-opacity-100 ${
        letter ? 'border-zinc-400' : 'border-zinc-700'
      } ${isLetterActive && isWordActive && 'border-b-[7px] border-zinc-400'}
        ${
          result === 'green'
            ? 'bg-green-400'
            : result === 'yellow'
              ? 'bg-yellow-400'
              : result === 'gray' && 'bg-gray-400'
        }
      `}
    >
      <p className="text-3xl font-bold">{letter.toUpperCase()}</p>
    </div>
  )
}
