import { HighlightTitles } from '@/components/interface/highlight-titles'

import { ProjectsSlider } from './projects-slider'

export const Projects = () => {
  return (
    <section className="py-12 md:px-4 lg:py-20">
      <HighlightTitles id="projects" title="Projetos" />
      <ProjectsSlider />
    </section>
  )
}
