import { BiLogoInstagram, BiLogoWhatsapp } from 'react-icons/bi'

import { Mail } from 'lucide-react'

export const Contacts = () => {
  return (
    <ul className="mt-6 flex list-none gap-6">
      <li className="rounded-md border-2 border-white from-[#9A3487] to-[#a991f0] p-2 text-white duration-500 hover:bg-gradient-to-r">
        <a
          href="mailto:rodriguesyuri769@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Mail className="h-9 w-9" />
        </a>
      </li>
      <li className="rounded-md border-2 border-white from-[#9A3487] to-[#a991f0] p-2 text-white duration-500 hover:bg-gradient-to-r">
        <a
          href="https://web.whatsapp.com/send?phone=31987336364"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoWhatsapp className="h-9 w-9" />
        </a>
      </li>
      <li className="rounded-md border-2 border-white from-[#9A3487] to-[#a991f0] p-2 text-white duration-500 hover:bg-gradient-to-r">
        <a
          href="https://www.instagram.com/yuri_rzz7"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoInstagram className="h-9 w-9" />
        </a>
      </li>
    </ul>
  )
}
