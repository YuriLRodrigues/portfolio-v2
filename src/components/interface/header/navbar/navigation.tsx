import { Navlink } from './nav-link'
import { NavigationMock } from './nav-mock'

export const Navigation = () => {
  return (
    <ul className="flex flex-col justify-between space-y-3 bg-transparent lg:flex-row lg:justify-end lg:space-x-8 lg:space-y-0">
      {NavigationMock.map((nav) => (
        <Navlink key={nav.href} href={nav.href}>
          {nav.label}
        </Navlink>
      ))}
    </ul>
  )
}
