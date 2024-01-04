import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const Trello = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex h-20 w-20 items-center justify-center', className)}
      {...props}
    >
      <svg
        fill="#ffffff"
        viewBox="-2 -2 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        className="max-w-[60%] md:max-w-[50%]"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M17.562 0H2.438A2.435 2.435 0 0 0 0 2.432v15.087a2.435 2.435 0 0 0 2.438 2.432h15.124A2.435 2.435 0 0 0 20 17.519V2.432A2.435 2.435 0 0 0 17.562 0zM8.7 15.55a1.13 1.13 0 0 1-1.132 1.13H3.732A1.13 1.13 0 0 1 2.6 15.55V3.893c0-.624.507-1.13 1.132-1.13h3.836A1.13 1.13 0 0 1 8.7 3.893V15.55zm8.7-5.015a1.13 1.13 0 0 1-1.132 1.13h-3.836a1.13 1.13 0 0 1-1.132-1.13V3.893c0-.624.507-1.13 1.132-1.13h3.836a1.13 1.13 0 0 1 1.132 1.13v6.642z"></path>
        </g>
      </svg>
    </div>
  )
}
