import { ElementType } from 'react'

import { Bootstrap } from '@/app/components/skills/techonologies/frontend/bootstrap'
import { CSS } from '@/app/components/skills/techonologies/frontend/css'
import { Cypress } from '@/app/components/skills/techonologies/frontend/cypress'
import { Figma } from '@/app/components/skills/techonologies/frontend/figma'
import { Git } from '@/app/components/skills/techonologies/frontend/git'
import { HTML } from '@/app/components/skills/techonologies/frontend/html'
import { Javascript } from '@/app/components/skills/techonologies/frontend/javascript'
import { Jest } from '@/app/components/skills/techonologies/frontend/jest'
import { Next } from '@/app/components/skills/techonologies/frontend/next'
import { React } from '@/app/components/skills/techonologies/frontend/react'
import { Sass } from '@/app/components/skills/techonologies/frontend/sass'
import { SocketIo } from '@/app/components/skills/techonologies/frontend/socketio'
import { Storybook } from '@/app/components/skills/techonologies/frontend/storybook'
import { StyledComponents } from '@/app/components/skills/techonologies/frontend/styled-components'
import { Tailwind } from '@/app/components/skills/techonologies/frontend/tailwind'
import { Typescript } from '@/app/components/skills/techonologies/frontend/typescript'

type FrontendSkillsProps = {
  name: string
  icon: ElementType
}

export const FrontendSkills: FrontendSkillsProps[] = [
  {
    icon: HTML,
    name: 'HTML',
  },
  {
    icon: CSS,
    name: 'CSS',
  },
  {
    icon: Javascript,
    name: 'Javascript',
  },
  {
    icon: Typescript,
    name: 'Typescript',
  },
  {
    icon: React,
    name: 'React',
  },
  {
    icon: Next,
    name: 'Next',
  },
  {
    icon: Tailwind,
    name: 'Tailwind',
  },
  {
    icon: StyledComponents,
    name: 'Styled Components',
  },
  {
    icon: Sass,
    name: 'Sass',
  },
  {
    icon: Bootstrap,
    name: 'Bootstrap',
  },
  {
    icon: Jest,
    name: 'Jest',
  },
  {
    icon: Cypress,
    name: 'Cypress',
  },
  {
    icon: Storybook,
    name: 'Storybook',
  },
  {
    icon: SocketIo,
    name: 'Socket.io',
  },
  {
    icon: Figma,
    name: 'Figma',
  },
  {
    icon: Git,
    name: 'Git',
  },
]
