import { DownButton } from './down-button'
import { LeftPresentation } from './left-presentation'
import { RightPresentation } from './right-presentation'

export const Presentation = () => {
  return (
    <>
      <div
        className="mx-4 mt-16 grid min-h-[calc(100vh-200px)] grid-cols-1 items-center justify-between gap-x-10 gap-y-20 lg:mt-24 lg:grid-cols-2 lg:gap-y-0"
        id="home"
      >
        <LeftPresentation />
        <RightPresentation />
      </div>
      <DownButton />
    </>
  )
}
