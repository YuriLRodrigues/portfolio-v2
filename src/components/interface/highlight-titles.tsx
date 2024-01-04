'use client'

import { motion } from 'framer-motion'

import { Heading } from '../ui/heanding'

type HighlightTitles = {
  title: string
  id: string
}

export const HighlightTitles = ({ title, id }: HighlightTitles) => {
  return (
    <motion.div
      className="relative"
      id={id}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
    >
      <Heading
        size="xg"
        position="centered"
        className="mt-10 uppercase lg:mt-20"
      >
        {' '}
        {title}
      </Heading>
      <Heading
        HeadingType="h3"
        size="xxg"
        position="centered"
        className="blh absolute -top-14 left-0 right-0 mt-10 uppercase text-transparent lg:-top-28 lg:mt-20"
      >
        {' '}
        {title}
      </Heading>
    </motion.div>
  )
}
