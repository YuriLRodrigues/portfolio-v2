'use client'
import 'aos/dist/aos.css'
AOS.init()

import { FaCircle } from 'react-icons/fa'

import { Heading } from '@/components/ui/heanding'
import { Text } from '@/components/ui/text'

import { expProf } from '@/config/exp-profissional'
import AOS from 'aos'

export const TabExpProfessional = () => {
  return (
    <section
      className="mt-6 rounded-md bg-white/10 p-2 backdrop-blur-md"
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      {expProf.map((exp) => (
        <div
          key={exp.area}
          className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6"
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
            <Text size="xs" variant="subtitle" className="text-muted-7">
              {exp.date}
            </Text>
          </div>
          <article className="my-4">
            <Text size="lg">{exp.description}</Text>
          </article>
        </div>
      ))}
    </section>
  )
}
