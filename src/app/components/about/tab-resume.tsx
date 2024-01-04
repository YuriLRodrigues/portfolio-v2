'use client'
import { Heading } from '@/components/ui/heanding'
import { Text } from '@/components/ui/text'

import { motion } from 'framer-motion'

import { TypewriterFS } from '../presentation/typewriter-FS'
import { Contacts } from './contacts'

export const TabResume = () => {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
          x: 350,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 350,
        }}
        transition={{
          duration: 0.5,
          delay: 0.24,
        }}
      >
        <Heading size="sm" position="left" className="mb-4 font-bold">
          Olá, eu sou
          <br />
          <span className="">Yuri Rodrigues</span>
          <br />
          <span className="bg-gradient-to-r from-[#9A3487] to-[#a991f0] bg-clip-text text-transparent">
            Desenvolvedor{' '}
            <TypewriterFS words={['Frontend', 'Backend', 'Fullstack']} />
          </span>
        </Heading>
      </motion.section>
      <motion.div
        initial={{
          opacity: 0,
          x: 350,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 350,
        }}
        transition={{
          duration: 0.5,
          delay: 0.24,
        }}
      >
        <Text>
          Desde Junho de 2023, tenho me dedicado em projetos freelancers e
          contribuições no mundo do código aberto, alimentando minha paixão pelo
          desenvolvimento. Meu foco tem sido ampliar minha habilidade fullstack
          e imergindo-me em suas complexidades. Minha jornada não foi apenas
          sobre aprender linguagens e ferramentas, mas também compreender a
          sinergia entre front-end e back-end, aprofundando-me em padrões
          arquiteturais e práticas de código. <br /> Estou aberto a absorver as
          tecnologias essenciais para fortalecer nossa equipe, oferecendo
          dedicação, entusiasmo e um conjunto de habilidades diversificado.{' '}
          <b className="border-b-2 border-dotted">
            Além disso, estou disponível para projetos freelancers
          </b>
          , pronto para trazer meu melhor em cada projeto a ser desenvolvido.
          <br />
          Se você estiver buscando por um desenvolvedor apaixonado por
          programação, comprometido, objetivo e motivado, que está sempre
          procurando obter mais conhecimento, garanto que posso ser a pessoa
          certa. Caso se interesse, é só entrar em contato comigo pelas redes
          abaixo, estarei ansioso e pronto para contribuir com o sucesso de sua
          empresa e em compartilhar meus conhecimentos, além de aprender com a
          toda a equipe!
        </Text>
      </motion.div>
      <Contacts />
    </>
  )
}
