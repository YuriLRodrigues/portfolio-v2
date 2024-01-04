import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import StarsCanvas from './components/stars-background'
import { Footer } from '@/components/interface/footer'
import { Header } from '@/components/interface/header/header'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yuri Rodrigues | Desenvolvedor Full-Stack',
  themeColor: '#000',
  description:
    'Yuri é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.',
  icons: {
    icon: ['/logo.png'],
  },
  applicationName: 'Eduardo Amaro | Desenvolvedor Full-Stack',
  keywords:
    'Eduardo Amaro, Frontend Engineer, Code, Communication, Web Development, Portfolio, Front-End Developer, Developer, Full-Stack Developer, Brazil, Brasil',
  openGraph: {
    type: 'website',
    url: '', // Adicionar
    title: 'Yuri Rodrigues | Desenvolvedor Full-Stack',
    description:
      'Yuri é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.',
    // images: '',
  },
  twitter: {
    card: 'summary_large_image',
    site: '', // Adicionar
    creator: '@',
    title: 'Yuri Rodrigues | Desenvolvedor Full-Stack',
    // images: '',
    description:
      'Yuri é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={`${poppins.className} bg-galaxy bg-cover`}>
        <Header />
        <StarsCanvas />
        {children}
        <Footer />
      </body>
    </html>
  )
}
