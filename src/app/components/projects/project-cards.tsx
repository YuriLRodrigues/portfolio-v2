'use client'

import 'swiper/css'
import Image from 'next/image'
import { useRef } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import { Text } from '@/components/ui/text'

import { ProjectsProps } from '@/config/projects'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SlideButton } from './slide-button'

type ProjectCardsImagesProps = {
  project: ProjectsProps
}

export const ProjectCardImages = ({ project }: ProjectCardsImagesProps) => {
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
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      modules={[Navigation]}
      className="mySwiper group relative h-[70%] max-h-[70%] max-w-[500px] cursor-grab overflow-hidden"
      style={{
        cursor: 'grab',
      }}
    >
      <div className="absolute top-0 z-50 flex h-[50%] w-full flex-col items-center rounded-t-lg bg-black/60 pt-16 duration-700 group-hover:translate-y-[-100%]">
        <Text size="xgg" className="font-bold text-white">
          {project.name}
        </Text>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto grid h-[50%] w-full grid-cols-auto-slide items-center justify-center rounded-b-lg bg-black/60 px-2 duration-700 group-hover:translate-y-[100%]">
        {project.techs.map((tech, index) => {
          const Tech = tech
          return (
            <Tech
              className="mx-auto h-8 w-8 opacity-0 md:h-11 md:w-11"
              key={index}
            />
          )
        })}
      </div>

      {project.images.length >= 2 && (
        <div className="absolute top-1/2 z-[30] flex w-full -translate-y-1/2 items-center justify-between opacity-0 duration-500 group-hover:opacity-100">
          <SlideButton onClick={prevSlide}>
            <BiLeftArrow />
          </SlideButton>
          <SlideButton onClick={nextSlide}>
            <BiRightArrow />
          </SlideButton>
        </div>
      )}

      {project.images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            width={500}
            height={500}
            className="left-0 right-0 mx-auto flex aspect-square rounded-lg object-cover object-center blur-sm duration-700 group-hover:blur-0"
            src={img}
            alt={img}
            priority
            quality={100}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
