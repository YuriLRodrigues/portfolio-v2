import { Heading } from '../ui/heanding'

type HighlightTitles = {
  title: string
  id: string
}

export const HighlightTitles = ({ title, id }: HighlightTitles) => {
  return (
    <div
      className="relative"
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-offset="100"
      data-aos-easing="ease-in-out-back"
      id={id}
    >
      <Heading
        size="xg"
        position="centered"
        className="mt-10 uppercase lg:mt-20"
      >
        {' '}
        {title}
      </Heading>
      <Heading
        HeadingType="h3"
        size="xxg"
        position="centered"
        className="blh absolute -top-14 left-0 right-0 mt-10 uppercase text-transparent lg:-top-28 lg:mt-20"
      >
        {' '}
        {title}
      </Heading>
    </div>
  )
}
