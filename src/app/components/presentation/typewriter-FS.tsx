'use client'

import { Typewriter } from 'react-simple-typewriter'

type TypewriterFSProps = {
  words: Array<string>
  loop?: number | boolean
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
}

export const TypewriterFS = ({
  words,
  loop = true,
  typeSpeed = 80,
  delaySpeed = 800,
  deleteSpeed = 60,
}: TypewriterFSProps) => {
  return (
    <Typewriter
      words={words}
      loop={loop}
      cursor
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
    />
  )
}
