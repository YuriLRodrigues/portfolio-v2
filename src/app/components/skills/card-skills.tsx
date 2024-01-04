'use client'
import 'aos/dist/aos.css'
AOS.init()
import Tilt from 'react-parallax-tilt'

import AOS from 'aos'

type CardSkillsProps = {
  time: number
  children?: React.ReactNode
}

export const CardSkills = ({ time, children }: CardSkillsProps) => {
  return (
    <Tilt
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      gyroscope={true}
      glareBorderRadius="5px"
      tiltReverse={true}
    >
      <div
        className="group relative flex h-28 w-24 flex-col items-center justify-center overflow-hidden rounded-md bg-white/20 text-center backdrop-blur-md md:h-36 md:w-32"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-offset={`${time}`}
        data-aos-easing="ease-in-sine"
      >
        {children}
      </div>
    </Tilt>
  )
}
