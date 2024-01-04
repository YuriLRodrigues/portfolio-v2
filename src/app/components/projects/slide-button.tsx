import React, { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const SlideButton = ({
  className,
  ...props
}: ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'rounded-md bg-gradient-to-r from-[#9A3487] to-[#a991f0] p-2 text-white',
        className,
      )}
      {...props}
    />
  )
}
