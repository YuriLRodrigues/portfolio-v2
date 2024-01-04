'use client'
import React from 'react'
import Tilt from 'react-parallax-tilt'

export const CardSkills = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tilt
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      gyroscope={true}
      glareBorderRadius="5px"
      tiltReverse={true}
    >
      <div className="group relative flex h-28 w-24 flex-col items-center justify-center overflow-hidden rounded-md bg-white/20 text-center backdrop-blur-md md:h-36 md:w-32">
        {children}
      </div>
    </Tilt>
  )
}
