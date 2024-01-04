'use client'
import Image from 'next/image'

import { motion } from 'framer-motion'

export const RightPresentation = () => {
  return (
    <motion.div
      className="flex w-full items-center justify-center"
      initial={{
        opacity: 0,
        x: 150,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 150,
      }}
      transition={{
        duration: 0.32,
        delay: 0.1,
      }}
    >
      <Image
        src="/avatar1.svg"
        width={400}
        height={400}
        alt="presentacion-astro"
        className="moon max-w-[250px] lg:max-w-[80%]"
      />
    </motion.div>
  )
}
