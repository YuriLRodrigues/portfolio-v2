'use client'
import Image from 'next/image'

import { motion } from 'framer-motion'

export const AboutLeftImage = () => {
  return (
    <motion.div
      className="mt-0 max-w-3xl space-y-6 md:mt-10 lg:ml-auto"
      initial={{
        opacity: 0,
        x: -200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -200,
      }}
      transition={{
        duration: 0.4,
        delay: 0.25,
      }}
    >
      <Image
        src="/eu.png"
        alt="yuri"
        width={420}
        height={420}
        className="max-w-[95%] lg:max-w-none"
      />
    </motion.div>
  )
}
