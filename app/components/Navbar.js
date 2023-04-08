import Image from "next/image";
import logo from "../../public/logoipsum.svg";
import { MdEmail } from "react-icons/md";
import NavToggle from "./NavToggle";

export default function Navbar() {
  return (
    <>
      <NavToggle />
      <nav id="navbar" data-visible="false" className="theme-navbar ">
        {/* logo section  */}
        <div
          id="nav-link"
          className="cursor-pointer hover:scale-125 transition-all
          md:h-1/3
          dark:invert"
        >
          <a href="#top">
            <Image src={logo} alt="Logo" className="max-h-full" />
          </a>
        </div>

        {/* links section */}
        <ul className="nav-links">
          <li>
            <a
              id="nav-link"
              href="#software"
              className="group cursor-pointer 
              hover:text-primary"
            >
              Software
              {/* line that appears when hover the link  */}
              <div className="line-navbar"></div>
            </a>
          </li>

          <li>
            <a
              id="nav-link"
              href="#motion"
              className="group cursor-pointer
              hover:text-primary"
            >
              Motion
              {/* line that appears when hover the link  */}
              <div className="line-navbar"></div>
            </a>
          </li>

          <li>
            <a
              id="nav-link"
              href="#about"
              className="group cursor-pointer
              hover:text-primary"
            >
              Acerca
              {/* line that appears when hover the link  */}
              <div className="line-navbar"></div>
            </a>
          </li>

          <li>
            <button id="nav-link">
              <a href="mailto:loremipsum" className="btn-secondary">
                Contactar <MdEmail className="text-xl" />
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
