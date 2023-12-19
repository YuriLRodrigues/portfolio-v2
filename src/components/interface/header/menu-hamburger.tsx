"use client";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

export const menuIsOpen = atom(false);

export const MenuHamburger = () => {
  const setValueMenuIsOpen = useSetAtom(menuIsOpen);
  const menuOpen = useAtomValue(menuIsOpen);

  return (
    <button
      onClick={() => setValueMenuIsOpen((prev) => !prev)}
      className="md:hidden flex items-center justify-center mr-4 text-xl bg-transparent text-white"
    >
      {menuOpen ? (
        <BiMenu className="w-8 h-8" />
      ) : (
        <BiMenuAltRight className="w-8 h-8" />
      )}
    </button>
  );
};
