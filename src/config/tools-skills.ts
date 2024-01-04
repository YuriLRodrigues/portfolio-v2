import { ElementType } from 'react'

import { ESLint } from '@/app/components/skills/techonologies/tools/eslint'
import { Git } from '@/app/components/skills/techonologies/tools/git'
import { GitHub } from '@/app/components/skills/techonologies/tools/github'
import { Insomnia } from '@/app/components/skills/techonologies/tools/insomnia'
import { Jira } from '@/app/components/skills/techonologies/tools/jira'
import { Notion } from '@/app/components/skills/techonologies/tools/notion'
import { Prettier } from '@/app/components/skills/techonologies/tools/prettier'
import { Trello } from '@/app/components/skills/techonologies/tools/trello'
import { Ubuntu } from '@/app/components/skills/techonologies/tools/ubuntu'

type ToolsSkillsProps = {
  name: string
  icon: ElementType
}

export const ToolsSkills: ToolsSkillsProps[] = [
  {
    icon: ESLint,
    name: 'ESLint',
  },
  {
    icon: Prettier,
    name: 'Prettier',
  },
  {
    icon: Insomnia,
    name: 'Insomnia',
  },
  {
    icon: Jira,
    name: 'Jira',
  },
  {
    icon: Trello,
    name: 'Trello',
  },
  {
    icon: Notion,
    name: 'Notion',
  },
  {
    icon: Ubuntu,
    name: 'Ubuntu',
  },
  {
    icon: Git,
    name: 'Git',
  },
  {
    icon: GitHub,
    name: 'GitHub',
  },
]
