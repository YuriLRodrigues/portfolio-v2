import { About } from './components/about'
import { Presentation } from './components/presentation'
import { Projects } from './components/projects'
import { Skills } from './components/skills'

export default function Portfolio() {
  return (
    <>
      <Presentation />
      <About />
      <Skills />
      <Projects />
    </>
  )
}
