'use client'
import Image from 'next/image'

import { slideInFromRight } from '@/utils/motion'
import { motion } from 'framer-motion'

export const RightPresentation = () => {
  return (
    <motion.div
      className="flex w-full items-center justify-center"
      variants={slideInFromRight(0.6)}
      initial="hidden"
      animate="visible"
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
