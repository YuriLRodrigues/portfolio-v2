import { ComponentProps } from 'react'

import { type VariantProps } from 'tailwind-variants'

import { ContainerVariants } from '../../../variants/container-variant'

type ContainerProps = ComponentProps<'div'> &
  VariantProps<typeof ContainerVariants>

export const Container = ({
  className,
  position,
  width,
  ...props
}: ContainerProps) => {
  return (
    <main
      className={ContainerVariants({
        position,
        width,
        className,
      })}
      {...props}
    />
  )
}
