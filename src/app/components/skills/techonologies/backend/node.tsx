import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const Node = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex h-20 w-20 items-center justify-center', className)}
      {...props}
    >
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        className="max-w-[60%] md:max-w-[80%]"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <title>node-js</title>{' '}
          <g id="Layer_2" data-name="Layer 2">
            {' '}
            <g id="invisible_box" data-name="invisible box">
              {' '}
              <rect width="48" height="48" fill="none"></rect>{' '}
            </g>{' '}
            <g id="Q3_icons" data-name="Q3 icons">
              {' '}
              <g>
                {' '}
                <path d="M42.3,11.8,25.7,2.4a4,4,0,0,0-3.4,0L5.7,11.8A3.4,3.4,0,0,0,4,14.7V33.3a3.4,3.4,0,0,0,1.7,2.9l4.4,2.5a7.2,7.2,0,0,0,3.8,1c3.1,0,4.9-1.9,4.9-5.1V16.3a.5.5,0,0,0-.5-.5H16.2a.5.5,0,0,0-.5.5V34.6c0,1.5-1.5,2.9-3.9,1.7L7.2,33.7a.5.5,0,0,1-.2-.4V14.7a.8.8,0,0,1,.2-.5L23.7,4.9h.6l16.5,9.3a.8.8,0,0,1,.2.5V33.3a.5.5,0,0,1-.2.4L24.3,43a.6.6,0,0,1-.6,0l-4.2-2.4a.3.3,0,0,0-.4,0l-2.5,1.1c-.3.1-.7.2.1.7l5.6,3.1a3.1,3.1,0,0,0,3.4,0l16.6-9.3A3.4,3.4,0,0,0,44,33.3V14.7A3.4,3.4,0,0,0,42.3,11.8Z"></path>{' '}
                <path d="M29.1,30.3c-4.4,0-5.3-1-5.7-3.1a.4.4,0,0,0-.4-.4H20.8a.4.4,0,0,0-.4.4c0,2.7,1.5,6,8.7,6,5.2,0,8.2-2,8.2-5.5s-2.4-4.5-7.5-5.1-5.6-1-5.6-2.2.4-2.2,4.2-2.2,4.7.7,5.2,2.9a.5.5,0,0,0,.5.4h2.1l.4-.2a.4.4,0,0,0,.1-.3c-.3-3.9-3-5.7-8.3-5.7s-7.5,2-7.5,5.2,2.8,4.5,7.3,5,5.9,1.2,5.9,2.3S32.6,30.3,29.1,30.3Z"></path>{' '}
              </g>{' '}
            </g>{' '}
          </g>{' '}
        </g>
      </svg>
    </div>
  )
}
