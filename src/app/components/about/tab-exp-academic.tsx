'use client'
import 'aos/dist/aos.css'
AOS.init()
import { FaCircle } from 'react-icons/fa'

import { Heading } from '@/components/ui/heanding'
import { Text } from '@/components/ui/text'

import { expAcad } from '@/config/exp-academic'
import AOS from 'aos'

export const TabExpAcademic = () => {
  return (
    <section
      className="mt-6 overflow-hidden rounded-md bg-white/10 px-4 py-4 backdrop-blur-md"
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      {expAcad.map((exp) => (
        <div
          key={exp.area}
          className="grid grid-cols-1 justify-between lg:grid-cols-2 lg:space-x-6"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
        >
          <div className="relative border-neutral-400/50 pb-4 pt-4 md:pt-0 lg:border-r-2">
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
          <article>
            <Text className="pb-4 text-justify md:pb-4">{exp.description}</Text>
          </article>
        </div>
      ))}
    </section>
  )
}
