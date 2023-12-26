import Grid from './(components)/Grid'
import { getDictionaryPt } from './(repositories)/dictionary'

export default async function Home() {
  const wordList = await getDictionaryPt()
  const secretWord =
    wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 py-2">
      <Grid secretWord={secretWord} />
    </div>
  )
}
