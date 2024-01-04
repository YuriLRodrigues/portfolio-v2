import { Text } from '@/components/ui/text'

import { FrontendSkills } from '@/config/frontend-skills'

import { CardSkills } from './card-skills'

export const TabFrontend = () => {
  return (
    <section className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-[1.5625rem] md:mt-20">
      {FrontendSkills.map((skill, index) => (
        <CardSkills key={skill.name} time={index + 35}>
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
      ))}
    </section>
  )
}
