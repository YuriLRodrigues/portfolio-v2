'use client'
import { Projects } from '@/config/projects'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ProjectCardImages } from './project-cards'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Text } from '@/components/ui/text'

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { ProjectLink } from './project-link'
import { SlideButton } from './slide-button'

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { useRef } from 'react'

export const ProjectsSlider = () => {
  const swiperRef = useRef<any>()

  const nextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const prevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  return (
    <Swiper
      onSwiper={(e) => (swiperRef.current = e)}
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={'auto'}
      breakpoints={{
        0: {
          spaceBetween: 5,
        },
        500: {
          spaceBetween: 65,
        },
      }}
      spaceBetween={30}
      coverflowEffect={{
        rotate: 20,
        stretch: -50,
        slideShadows: true,
      }}
      navigation={{
        enabled: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper relative mx-auto mt-10 flex w-full max-w-[1185px] cursor-grab items-center justify-center gap-4 py-10 md:mt-20"
      style={{
        paddingLeft: '30px',
        paddingRight: '30px',
      }}
    >
      <div className="absolute left-0 top-1/2 z-[30] flex w-full -translate-y-1/2 items-center justify-between gap-10 duration-500">
        <SlideButton onClick={prevSlide}>
          <BiLeftArrow />
        </SlideButton>
        <SlideButton onClick={nextSlide}>
          <BiRightArrow />
        </SlideButton>
      </div>

      {Projects.map((proj) => (
        <SwiperSlide
          className="mx-auto max-w-[250px] overflow-hidden rounded-lg bg-white/10 object-cover p-4 md:max-w-[320px]"
          key={proj.name}
        >
          <ProjectCardImages project={proj} />

          <div className="flex items-center justify-between gap-6">
            <ProjectLink
              href={proj.urlGithub.frontend ?? proj.urlGithub.backend}
            >
              <Text className="z-[3]">Github</Text>
              <FaGithub className="z-[3] h-7 w-7 text-white" />
            </ProjectLink>

            <ProjectLink href={proj.url}>
              <Text className="z-[3]">Deploy</Text>
              <FaExternalLinkAlt className="z-[3] h-6 w-6 text-white" />
            </ProjectLink>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
