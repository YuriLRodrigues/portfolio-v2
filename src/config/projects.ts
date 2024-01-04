import { ElementType } from 'react'

import { Express } from '@/app/components/skills/techonologies/backend/express'
import { Node } from '@/app/components/skills/techonologies/backend/node'
import { Bootstrap } from '@/app/components/skills/techonologies/frontend/bootstrap'
import { Javascript } from '@/app/components/skills/techonologies/frontend/javascript'
import { Next } from '@/app/components/skills/techonologies/frontend/next'
import { React } from '@/app/components/skills/techonologies/frontend/react'
import { Sass } from '@/app/components/skills/techonologies/frontend/sass'
import { Tailwind } from '@/app/components/skills/techonologies/frontend/tailwind'
import { Typescript } from '@/app/components/skills/techonologies/frontend/typescript'
import { Vite } from '@/app/components/skills/techonologies/frontend/vite'
import { ESLint } from '@/app/components/skills/techonologies/tools/eslint'
import { Prettier } from '@/app/components/skills/techonologies/tools/prettier'

export type ProjectsProps = {
  name: string
  images: string[]
  description: string
  urlGithub: {
    frontend?: string
    backend?: string
  }
  url: string
  techs: ElementType[]
  infosTeste?: string
}

export const Projects: ProjectsProps[] = [
  {
    name: 'Valorant',
    description:
      'Este projeto consiste no consumo da API do valorant, trazendo uma página com detalhes sobre cada personagem e suas habilidades, mapas, armas com suas determinadas skins, tudo isso com um sistema de gerenciamento estático das páginas, sendo muito mais performático, principalmente por todas as páginas serem renderizadas do lado do servidor. Toda a construção do sistema foi baseado na Clean Architecture no frontend, juntamente do pattern composition que faz com que possamos estabilizar todas as páginas no SSR (lado do servidor) e apenas pequenos componentes sendo hidratados (lado do cliente), melhorando totalmente a performace do site.',
    images: ['/projects/valorant.png'],
    techs: [Typescript, Next, Tailwind, Prettier, ESLint],
    url: 'https://valorant-gg.vercel.app/',
    urlGithub: { frontend: 'https://github.com/YuriLRodrigues/valorant' },
  },
  {
    name: 'Finance Flow',
    description: `Frontend:
    Desenvolvi o frontend de uma aplicação financeira interativa, permitindo aos usuários acessar sua conta por meio de login e cadastro. A interface oferece uma visão detalhada das entradas e saídas financeiras com gráficos distintos para representar esses dados, exibindo as movimentações diárias. Com foco na usabilidade, os gráficos de entrada e saída destacam visualmente as transações financeiras, permitindo uma compreensão clara dos fluxos de dinheiro na conta do usuário.
    
    Backend:
    No backend, criei um sistema robusto de autenticação, cadastro e exclusão de usuários. Utilizei um sistema de validação para garantir a unicidade de informações sensíveis, como username e CPF, no momento do cadastro. Além disso, implementei um sistema de saldo bancário para validar e gerenciar as entradas e saídas de maneira apropriada. O backend oferece rotas para criar novas transações, como entradas e saídas, com validações específicas para garantir que o usuário tenha saldo suficiente para realizar uma saída e também validar a criação de um novo usuário sem duplicação de informações críticas. Essa estrutura de backend robusta proporciona segurança e eficiência no gerenciamento das finanças dos usuários.`,
    images: ['/projects/finance-flow.png'],
    techs: [Typescript, Next, Tailwind, Node, Express, Prettier, ESLint],
    url: 'https://finance-flow-dashboard.vercel.app/',
    urlGithub: {
      frontend: 'https://github.com/YuriLRodrigues/finance-flow-frontend',
      backend: 'https://github.com/YuriLRodrigues/finance-flow-backend',
    },
  },
  {
    name: 'Market Mercado Livre',
    description:
      'Meu projeto usa a API do Mercado Livre para exibir, pesquisar e gerenciar produtos no carrinho. Desenvolvido com React e Vite, e estilizado com Sass, oferece uma interface ágil para explorar itens, realizar buscas por categoria e adicionar/remover produtos do carrinho. Com essa integração eficiente e a estilização flexível do Sass, proporciona uma experiência de compra fluida e personalizada.',
    images: ['/projects/ml.png'],
    techs: [React, Javascript, Sass, Vite],
    url: 'https://mercado-livre-react.vercel.app/',
    urlGithub: {
      frontend: 'https://github.com/YuriLRodrigues/Mercado-Livre-React',
    },
  },
  {
    name: 'Ecommerce Next',
    description:
      'Desenvolvi um projeto de e-commerce utilizando Next.js e Bootstrap, como parte do meu aprendizado com o curso da Onebitcode. Esta aplicação web apresenta uma página inicial, uma seleção de produtos dinâmica, páginas individuais de detalhes dos produtos e um sistema de carrinho interativo. Os recursos incluem a capacidade de adicionar, remover produtos e visualizar o valor total no carrinho. Esta experiência prática me permitiu explorar a integração de múltiplas páginas, a manipulação de dados e a implementação de funcionalidades básicas de e-commerce fundamentais.',
    images: ['/projects/ecommerce-next.png'],
    techs: [Next, Typescript, Bootstrap],
    url: 'https://ecommerce-next-swart-eta.vercel.app/',
    urlGithub: { frontend: 'https://github.com/YuriLRodrigues/ecommerce-next' },
  },
  {
    name: 'Portfólio V1',
    description:
      'Essa é a primeira versão do meu portfólio, que ainda está no ar. Todo o projeto foi desenvolvido com React e Vite, sendo construído bem no início dos meus estudos (meados de setembro de 2023). Decidi renovar o meu portfólio para essa atual versão com o intuito de colocar as tecnologias mais utilizadas atualmente, com uma identidade visual única e muito mais informaçẽs sobre mim e a stack que desenvolvo atualmente',
    images: ['/projects/portfolio.png'],
    techs: [Typescript, React, Tailwind, Vite, Prettier, ESLint],
    url: 'https://portfolio-yurilrodrigues.vercel.app/',
    urlGithub: {
      frontend:
        'https://github.com/YuriLRodrigues/my-portfolio/tree/main/my-portfolio',
    },
  },
]
