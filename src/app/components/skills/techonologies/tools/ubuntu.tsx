import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const Ubuntu = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex h-20 w-20 items-center justify-center', className)}
      {...props}
    >
      <svg
        fill="#ffffff"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-[60%] md:max-w-[55%]"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <title>ubuntu</title>{' '}
          <path d="M20.098 8.901c0.287 0.168 0.632 0.268 1 0.268 1.106 0 2.002-0.896 2.002-2.002s-0.896-2.002-2.002-2.002c-0.738 0-1.383 0.4-1.73 0.994l-0.005 0.010c-0.167 0.286-0.266 0.63-0.266 0.997 0 0.737 0.398 1.381 0.991 1.729l0.009 0.005zM16 10.152c3.047 0 5.549 2.331 5.822 5.307l0.002 0.023 2.855-0.043c-0.147-2.221-1.108-4.193-2.585-5.642l-0.001-0.001c-0.296 0.116-0.639 0.183-0.997 0.183-1.393 0-2.55-1.016-2.768-2.348l-0.002-0.016c-0.697-0.197-1.497-0.311-2.324-0.312h-0.001c-0.003 0-0.008 0-0.012 0-1.4 0-2.722 0.332-3.892 0.922l0.050-0.023 1.391 2.493c0.72-0.343 1.566-0.544 2.458-0.544 0.002 0 0.004 0 0.006 0h-0zM5.803 13.998c-0 0-0.001 0-0.001 0-1.106 0-2.002 0.896-2.002 2.002s0.896 2.002 2.002 2.002c1.106 0 2.002-0.896 2.002-2.002v0c0-0 0-0 0-0 0-1.105-0.896-2.001-2.001-2.002h-0zM10.152 16c0-0 0-0.001 0-0.001 0-1.971 0.975-3.714 2.469-4.773l0.018-0.012-1.462-2.451c-1.75 1.176-3.034 2.929-3.586 4.981l-0.014 0.061c0.635 0.513 1.037 1.291 1.037 2.163 0 0.004 0 0.008-0 0.011v-0.001c-0.002 0.875-0.404 1.656-1.032 2.169l-0.005 0.004c0.567 2.113 1.851 3.865 3.569 5.021l0.031 0.020 1.462-2.456c-1.51-1.047-2.487-2.771-2.487-4.724 0-0.005 0-0.011 0-0.016v0.001zM16 21.848c-0.001 0-0.003 0-0.005 0-0.892 0-1.738-0.2-2.493-0.559l0.035 0.015-1.391 2.493c1.121 0.568 2.445 0.901 3.846 0.901 0.83 0 1.633-0.117 2.393-0.335l-0.061 0.015c0.225-1.346 1.381-2.36 2.774-2.36 0.357 0 0.699 0.067 1.013 0.188l-0.019-0.007c1.48-1.449 2.441-3.421 2.585-5.616l0.001-0.026-2.855-0.041c-0.274 2.999-2.776 5.331-5.823 5.331h-0zM20.098 23.098c-0.602 0.353-1 0.996-1 1.732 0 1.105 0.896 2.001 2.001 2.001s2.001-0.896 2.001-2.001c0-0.369-0.1-0.715-0.274-1.012l0.005 0.009c-0.353-0.601-0.996-0.998-1.732-0.998-0.369 0-0.714 0.1-1.011 0.273l0.009-0.005zM16 1.004c8.282 0 14.996 6.714 14.996 14.996s-6.714 14.996-14.996 14.996c-8.282 0-14.996-6.714-14.996-14.996v0c0.004-8.28 6.715-14.992 14.995-14.996h0z"></path>{' '}
        </g>
      </svg>
    </div>
  )
}
