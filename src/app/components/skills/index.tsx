import { HighlightTitles } from '@/components/interface/highlight-titles'
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { TabBackend } from './tab-backend'
import { TabFrontend } from './tab-frontend'
import { TabTools } from './tab-tools'

export const Skills = () => {
  return (
    <section className="px-4 py-12 lg:py-20" id="skills">
      <HighlightTitles title="Habilidades" id="skills" />
      <div className="mx-auto mt-10 max-w-[1500px] gap-8 lg:mt-20">
        <div className="order-2 col-span-2 mt-10 lg:order-1 lg:mt-0">
          <Tabs defaultValue="frontend" className="mx-auto max-w-none">
            <TabsList className="mx-auto mb-7">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Ferramentas</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
              <TabFrontend />
            </TabsContent>
            <TabsContent value="backend">
              <TabBackend />
            </TabsContent>
            <TabsContent value="tools">
              <TabTools />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
