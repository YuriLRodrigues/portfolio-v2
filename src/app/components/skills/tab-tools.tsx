'use client'
import { Text } from '@/components/ui/text'

import { ToolsSkills } from '@/config/tools-skills'
import { motion } from 'framer-motion'

import { CardSkills } from './card-skills'

export const TabTools = () => {
  return (
    <section className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-[1.5625rem] md:mt-20 ">
      {ToolsSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{
            opacity: 0,
            x: -75,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -75,
          }}
          transition={{
            duration: 0.1,
            delay: 0.09 * index,
          }}
        >
          <CardSkills>
            <span className="duration-300 group-hover:scale-125">
              <skill.icon />
            </span>
            <Text
              size="sm"
              position="centered"
              className="absolute -bottom-14 px-2 text-center duration-300 group-hover:bottom-1 md:group-hover:bottom-2"
            >
              {skill.name}
            </Text>
          </CardSkills>
        </motion.div>
      ))}
    </section>
  )
}
