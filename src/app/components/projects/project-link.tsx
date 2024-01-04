import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const ProjectLink = ({
  className,
  children,
  ...props
}: ComponentProps<'a'>) => {
  return (
    <a
      target="_blank"
      className={cn(
        'group relative mt-4 flex h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-md border-2 border-white p-2',
        className,
      )}
      rel="noreferrer"
      {...props}
    >
      <div className="absolute h-full w-full translate-x-[110%] bg-gradient-to-r from-[#86349a] to-[#a991f0] duration-500 group-hover:translate-x-0"></div>
      {children}
    </a>
  )
}
