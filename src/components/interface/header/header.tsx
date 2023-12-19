import { Logo } from "./logo";
import { MenuHamburger } from "./menu-hamburger";
import { Navbar } from "./navbar/navbar";
import { Navigation } from "./navbar/navgation";

export const Header = () => {
  return (
    <header className="fixed flex justify-between bg-[#03001417]/50 items-center top-0 shadow-lg shadow-[#110b1f] w-full backdrop-blur-md z-50 md:px-10 px-1 py-2">
      <Logo src={"/logo.png"} alt="logo-portfolio" />
      <MenuHamburger />
      <Navbar>
        <Navigation />
      </Navbar>
    </header>
  );
};
