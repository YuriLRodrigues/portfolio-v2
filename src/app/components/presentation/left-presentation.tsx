'use client'
import { Heading } from '@/components/ui/heanding'
import { Text } from '@/components/ui/text'

import { motion } from 'framer-motion'

import { SocialMedia } from './social-media'
import { TypewriterFS } from './typewriter-FS'

export const LeftPresentation = () => {
  return (
    <motion.div
      className="max-w-3xl space-y-6 lg:ml-auto"
      initial={{
        opacity: 0,
        x: -150,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -150,
      }}
      transition={{
        duration: 0.32,
        delay: 0.1,
      }}
    >
      <Heading
        HeadingType="h1"
        size="lg"
        variant="title"
        className="w-full font-bold uppercase"
      >
        Em busca contínua de aprimoramento no <br />
        <span className="bg-gradient-to-r from-[#9A3487] to-[#a991f0] bg-clip-text text-transparent">
          <TypewriterFS words={['desenvolvimento web.']} />
        </span>
      </Heading>
      <Text>
        Desenvolvendo inovações que transformam aspirações em soluções
        tangíveis, impulsionando o potencial do seu negócio além dos limites.
      </Text>
      <SocialMedia />
    </motion.div>
  )
}
