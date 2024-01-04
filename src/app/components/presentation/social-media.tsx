import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

export const SocialMedia = () => {
  return (
    <div className="flex items-center gap-6">
      <a
        href="/cv-yuri.pdf"
        target="_blank"
        className="rounded-md border-2 border-white from-[#9A3487] to-[#a991f0] p-2 text-white duration-500 hover:bg-gradient-to-tr"
      >
        Download CV
      </a>
      <a
        href="https://github.com/YuriLRodrigues"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white from-[#9A3487] to-[#a991f0] p-1 text-center duration-500 hover:bg-gradient-to-r hover:text-white"
        rel="noreferrer"
      >
        <BiLogoGithub className="h-8 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/yuri-leite-rodrigues"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white from-[#9A3487] to-[#a991f0] p-1 text-center duration-500 hover:bg-gradient-to-r hover:text-white"
        rel="noreferrer"
      >
        <BiLogoLinkedin className="h-8 w-8" />
      </a>
    </div>
  )
}
