import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const EJS = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex h-20 w-20 items-center justify-center', className)}
      {...props}
    >
      <svg
        viewBox="0 0 32 32"
        width="60"
        height="60"
        fill="#F6FBF4"
        className="max-w-[60%] md:max-w-[80%]"
      >
        <path
          d="M2,17.672V14.328l11.86-6.2V11.2L5.1,15.939l8.762,4.835v3.1Zm27.814-8.88L19.465,23.229H15.912L26.281,8.791ZM26.947,21.5a.794.794,0,0,0,.619-.278,1.061,1.061,0,0,0,.248-.732,1.141,1.141,0,0,0-.248-.753.768.768,0,0,0-1.217,0,1.141,1.141,0,0,0-.248.753,1.09,1.09,0,0,0,.237.732A.763.763,0,0,0,26.947,21.5Zm2.186,1.042a3.237,3.237,0,0,1-4.352-.01,2.864,2.864,0,0,1,0-4.1,3.223,3.223,0,0,1,4.352,0A2.773,2.773,0,0,1,30,20.486,2.74,2.74,0,0,1,29.134,22.538ZM18.821,13.061a.794.794,0,0,0,.619-.278,1.061,1.061,0,0,0,.248-.732,1.141,1.141,0,0,0-.248-.753.769.769,0,0,0-1.217,0,1.141,1.141,0,0,0-.248.753,1.09,1.09,0,0,0,.237.732A.763.763,0,0,0,18.821,13.061ZM21.007,14.1a3.237,3.237,0,0,1-4.352-.01,2.864,2.864,0,0,1,0-4.1,3.223,3.223,0,0,1,4.352,0,2.773,2.773,0,0,1,.866,2.063A2.74,2.74,0,0,1,21.007,14.1Z"
          fill="#F6FBF4"
        ></path>
      </svg>
    </div>
  )
}