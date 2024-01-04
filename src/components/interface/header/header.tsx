import { Logo } from './logo'
import { MenuHamburger } from './menu-hamburger'
import { Navbar } from './navbar/navbar'
import { Navigation } from './navbar/navgation'

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#220D3C]/100 px-1 py-2 backdrop-blur-md lg:bg-[#220D3C]/50 lg:px-10 lg:shadow-lg lg:shadow-[#110b1f]">
      <Logo src={'/logo.png'} alt="logo-portfolio" />
      <MenuHamburger />
      <Navbar>
        <Navigation />
      </Navbar>
    </header>
  )
}
