import { ElementType } from 'react'

import { Docker } from '@/app/components/skills/techonologies/backend/docker'
import { EJS } from '@/app/components/skills/techonologies/backend/ejs'
import { Express } from '@/app/components/skills/techonologies/backend/express'
import { Firebase } from '@/app/components/skills/techonologies/backend/firebase'
import { Git } from '@/app/components/skills/techonologies/backend/git'
import { Javascript } from '@/app/components/skills/techonologies/backend/javascript'
import { Jest } from '@/app/components/skills/techonologies/backend/jest'
import { MongoDB } from '@/app/components/skills/techonologies/backend/mongo'
import { Mongoose } from '@/app/components/skills/techonologies/backend/mongoose'
import { MySQL } from '@/app/components/skills/techonologies/backend/mysql'
import { Nest } from '@/app/components/skills/techonologies/backend/nest'
import { Node } from '@/app/components/skills/techonologies/backend/node'
import { PostgreSQL } from '@/app/components/skills/techonologies/backend/postgre'
import { Prisma } from '@/app/components/skills/techonologies/backend/prisma'
import { Sequelize } from '@/app/components/skills/techonologies/backend/sequelize'
import { SocketIo } from '@/app/components/skills/techonologies/backend/socketio'
import { Swagger } from '@/app/components/skills/techonologies/backend/swagger'
import { Typescript } from '@/app/components/skills/techonologies/backend/typescript'

type BackendSkillsProps = {
  name: string
  icon: ElementType
}

export const BackendSkills: BackendSkillsProps[] = [
  {
    icon: Javascript,
    name: 'Javascript',
  },
  {
    icon: Typescript,
    name: 'Typescript',
  },
  {
    icon: Node,
    name: 'NodeJS',
  },
  {
    icon: Express,
    name: 'Express',
  },
  {
    icon: Nest,
    name: 'NestJS',
  },
  {
    icon: Jest,
    name: 'Jest',
  },
  {
    icon: MongoDB,
    name: 'MongoDB',
  },
  {
    icon: Mongoose,
    name: 'Mongoose',
  },
  {
    icon: PostgreSQL,
    name: 'PostgreSQL',
  },
  {
    icon: Sequelize,
    name: 'Sequelize',
  },
  {
    icon: MySQL,
    name: 'MySQL',
  },
  {
    icon: Prisma,
    name: 'Prisma',
  },
  {
    icon: Docker,
    name: 'Docker',
  },
  {
    icon: Swagger,
    name: 'Swagger',
  },
  {
    icon: SocketIo,
    name: 'Socket.io',
  },
  {
    icon: EJS,
    name: 'EJS',
  },
  {
    icon: Firebase,
    name: 'Firebase',
  },
  {
    icon: Git,
    name: 'Git',
  },
]
