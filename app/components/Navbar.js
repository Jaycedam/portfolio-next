import Image from "next/image";
import logo from "../../public/logoipsum.svg";
import { MdEmail } from "react-icons/md";
import NavToggle from "./NavToggle";

export default function Navbar() {
  return (
    <>
      <NavToggle />
      <nav id="navbar" data-visible="false" className="theme-navbar">
        <div className="container mx-auto navbar">
          {/* logo section  */}
          <a
            href="#top"
            className="h-6 text-zinc-950 
            dark:invert"
          >
            <Image src={logo} alt="Logo" className="max-h-full" />
          </a>

          {/* links section */}
          <ul className="nav-links">
            <li>
              <a href="#software" className="nav-link">
                Software
              </a>
            </li>

            <li>
              <a href="#motion" className="nav-link">
                Motion
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link">
                Acerca
              </a>
            </li>

            <li>
              <a href="#" className="nav-link">
                Contactar
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
