import React from 'react'

import { HighlightTitles } from '@/components/interface/highlight-titles'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AboutLeftImage } from './about-left-image'
import { TabExpAcademic } from './tab-exp-academic'
import { TabExpProfessional } from './tab-exp-professional'
import { TabResume } from './tab-resume'

export const About = () => {
  return (
    <section className="px-4 py-12 lg:py-20">
      <HighlightTitles title="Sobre mim" id="about" />
      <div className="mx-auto mt-10 grid max-w-[1500px] grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-3">
        <div className="order-2 col-span-2 mt-10 lg:order-1 lg:mt-0">
          <Tabs defaultValue="resume" className="mx-auto max-w-none">
            <TabsList className="mx-auto mb-7">
              <TabsTrigger value="resume">Resumo</TabsTrigger>
              <TabsTrigger value="exp-prof">Profissional</TabsTrigger>
              <TabsTrigger value="exp-acad">Acadêmico</TabsTrigger>
            </TabsList>
            <TabsContent value="resume">
              <TabResume />
            </TabsContent>
            <TabsContent value="exp-acad">
              <TabExpAcademic />
            </TabsContent>
            <TabsContent value="exp-prof">
              <TabExpProfessional />
            </TabsContent>
          </Tabs>
        </div>
        <AboutLeftImage />
      </div>
    </section>
  )
}
