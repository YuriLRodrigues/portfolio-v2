import { ComponentProps } from "react";

type NavlinkProps = ComponentProps<"a">;

export const Navlink = ({ ...props }: NavlinkProps) => {
  return (
    <li className="list-none cursor-pointer">
      <a
        className={`relative md:after:absolute md:after:content-[''] md:after:bg-gradient-to-r from-[#3a3172] from-67% to-[#a991f0] md:after:h-[2px] md:after:w-0 md:after:left-0 md:after:-bottom-[5px] md:hover:after:w-[100%] md:after:duration-500 pl-2 md:pl-0 uppercase font-medium text-[#fff] duration-500 md:border-l-0 border-l-2 border-[#3a3172] hover:text-[#aaaaaa]`}
        {...props}
      />
    </li>
  );
};
