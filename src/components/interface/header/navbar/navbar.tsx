'use client'
import { ReactNode } from 'react'

import { useAtomValue } from 'jotai'

import { menuIsOpen } from '../menu-hamburger'

export const Navbar = ({ children }: { children: ReactNode }) => {
  const menuOpen = useAtomValue(menuIsOpen)

  return (
    <nav
      className={`absolute right-0 top-16 -z-40 mt-0.5 w-full p-4 px-4 duration-700 lg:static  ${
        menuOpen
          ? 'translate-y-0 bg-[#220D3C]'
          : 'translate-y-[-200%] bg-transparent lg:translate-y-0'
      }`}
    >
      {children}
    </nav>
  )
}
