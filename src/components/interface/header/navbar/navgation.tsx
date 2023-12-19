import { Navlink } from "./nav-link";
import { NavigationMock } from "./nav-mock";

export const Navigation = () => {
  return (
    <ul className="flex md:flex-row flex-col justify-between md:justify-end md:space-x-8 space-y-3 md:space-y-0">
      {NavigationMock.map((nav) => (
        <Navlink key={nav.href} href={nav.href}>
          {nav.label}
        </Navlink>
      ))}
    </ul>
  );
};
