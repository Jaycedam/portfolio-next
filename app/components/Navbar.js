import Image from "next/image";
import logo from "../../public/logoipsum.svg";
import { MdEmail } from "react-icons/md";
import NavToggle from "./NavToggle";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <>
      <NavToggle />
      <nav id="navbar" data-visible="false" className="theme-navbar">
        <div className="container mx-auto navbar">
          {/* logo section  */}
          <div
            id="nav-link"
            className="cursor-pointer hover:scale-125 transition-all
              md:h-full
              dark:invert"
          >
            <a href="#top" className="nav-link">
              <Image src={logo} alt="Logo" className="max-h-full" />
            </a>
          </div>

          {/* links section */}
          <ul className="nav-links">
            <NavLink name="Software" href="#software" />
            <NavLink name="Motion" href="#motion" />
            <NavLink name="Acerca" href="#about" />
            <NavLink name="CV" href="#" />
            <NavLink name="Contactar" href="#" />
          </ul>
        </div>
      </nav>
    </>
  );
}
