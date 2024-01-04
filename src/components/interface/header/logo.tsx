import Image from 'next/image'
import { ComponentProps } from 'react'

type LogoProps = ComponentProps<typeof Image>

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <a href="#home">
      <Image {...props} width={50} height={50} />
    </a>
  )
}
