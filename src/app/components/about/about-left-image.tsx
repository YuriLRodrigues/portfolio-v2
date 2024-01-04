'use client'
import 'aos/dist/aos.css'
AOS.init()
import Image from 'next/image'

import AOS from 'aos'

export const AboutLeftImage = () => {
  return (
    <div
      className="mx-auto md:mt-10"
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Image
        src="/eu.png"
        alt="yuri"
        width={420}
        height={420}
        className="max-w-[95%] lg:max-w-none"
      />
    </div>
  )
}
