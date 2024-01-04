import { ArrowDown } from 'lucide-react'

export const DownButton = () => {
  return (
    <button className="updown-button mx-auto flex text-white">
      <a href="#about">
        <ArrowDown className="h-12 w-12" />
      </a>
    </button>
  )
}
