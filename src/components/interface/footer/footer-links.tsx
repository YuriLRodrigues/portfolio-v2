import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

import { Mail } from 'lucide-react'
export const FooterLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6">
      <a
        href="mailto:rodriguesyuri769@gmail.com"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center text-white duration-500 hover:text-slate-300"
        rel="noreferrer"
      >
        <Mail className="h-8 w-8" />
      </a>
      <a
        href="https://github.com/YuriLRodrigues"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center text-white duration-500 hover:text-slate-300"
        rel="noreferrer"
      >
        <BiLogoGithub className="h-8 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/yuri-leite-rodrigues"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center text-white duration-500 hover:text-slate-300"
        rel="noreferrer"
      >
        <BiLogoLinkedin className="h-8 w-8" />
      </a>
    </div>
  )
}
