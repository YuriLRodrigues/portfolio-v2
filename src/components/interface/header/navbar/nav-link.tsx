import { ComponentProps } from 'react'

type NavlinkProps = ComponentProps<'a'>

export const Navlink = ({ ...props }: NavlinkProps) => {
  return (
    <li className="cursor-pointer list-none">
      <a
        className={`from-67% relative border-l-2 border-[#3a3172] from-[#3a3172] to-[#a991f0] pl-2 font-medium uppercase text-[#fff] duration-500 hover:text-[#aaaaaa] lg:border-l-0 lg:pl-0 lg:after:absolute lg:after:-bottom-[5px] lg:after:left-0 lg:after:h-[3px] lg:after:w-0 lg:after:bg-gradient-to-r lg:after:duration-500 lg:after:content-[''] lg:hover:after:w-[100%]`}
        {...props}
      />
    </li>
  )
}
