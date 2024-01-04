'use client'

import { FaCircle } from 'react-icons/fa'

import { Heading } from '@/components/ui/heanding'
import { Text } from '@/components/ui/text'

import { expProf } from '@/config/exp-profissional'
import { motion } from 'framer-motion'
export const TabExpProfessional = () => {
  return (
    <motion.section
      className="mt-6 rounded-md bg-white/10 p-2 backdrop-blur-md"
      initial={{
        opacity: 0,
        y: -150,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
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
      {expProf.map((exp, i) => (
        <motion.div
          key={exp.area}
          className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6"
          initial={{
            opacity: 0,
            y: -75,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -75,
          }}
          transition={{
            duration: 0.4,
            delay: 0.3 * i,
          }}
        >
          <div className="relative my-4 border-neutral-400/50 pr-6 lg:border-r-2">
            <div className="hidden lg:block">
              <FaCircle className="-top-4.5 absolute -right-2.5 text-purple-500" />
            </div>
            <Heading HeadingType="h4" size="xs">
              {exp.business}
            </Heading>
            <Heading
              HeadingType="h5"
              size="2xs"
              className="bg-gradient-to-r from-[#9A3487] to-[#a991f0] bg-clip-text text-transparent"
            >
              {exp.area}
            </Heading>
            <Text size="xs" variant="subtitle" className="text-muted-7 ">
              {exp.date}
            </Text>
          </div>
          <article className="my-4">
            <Text size="lg" className="text-justify">
              {exp.description}
            </Text>
          </article>
        </motion.div>
      ))}
    </motion.section>
  )
}
