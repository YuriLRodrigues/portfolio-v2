"use client";
import { useAtomValue } from "jotai";
import { ReactNode } from "react";
import { menuIsOpen } from "../menu-hamburger";

export const Navbar = ({ children }: { children: ReactNode }) => {
  const menuOpen = useAtomValue(menuIsOpen);

  return (
    <nav
      className={`p-4 md:static absolute top-14 w-full bg-[#030014] right-0 px-4 md:px-0 duration-300 ${
        menuOpen ? "translate-y-0" : "md:translate-y-0 translate-y-[-200%]"
      }`}
    >
      {children}
    </nav>
  );
};
