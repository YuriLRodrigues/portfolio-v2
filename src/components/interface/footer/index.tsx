import Image from 'next/image'

import { Text } from '@/components/ui/text'

import { FooterLinks } from './footer-links'

export const Footer = () => {
  return (
    <footer className="w-full space-y-4 bg-[#27164E] p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between">
        <Image
          src={'/logo.png'}
          width={100}
          height={100}
          alt="logo-rodrigues"
          className="h-14 w-14"
        />
        <FooterLinks />
      </div>

      <Text position="centered" className="mx-auto w-full text-center">
        &copy; Todos os direitos reservados - Yuri Rodrigues 2024-2024
      </Text>
    </footer>
  )
}
