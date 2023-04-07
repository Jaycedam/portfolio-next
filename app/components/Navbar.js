import Image from "next/image";
import logo from "../../public/logoipsum.svg";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  return (
    // container
    <div
      className="w-screen fixed bottom-0 z-50 
      md:bottom-auto md:top-0 md:flex md:justify-end"
    >
      <nav className="theme-navbar w-full">
        {/* logo section  */}
        <div
          className="hidden 
            cursor-pointer hover:scale-125 transition-all
            md:block md:h-1/3
            dark:invert"
        >
          <a href="#top">
            <Image src={logo} alt="Logo" className="max-h-full" />
          </a>
        </div>

        {/* links section */}
        <ul
          className="flex flex-row justify-center gap-12 items-center
            md:justify-end"
        >
          <li>
            <a
              href="#top"
              className="group cursor-pointer 
                hover:text-primary"
            >
              Inicio
              {/* line that appears when hover the link  */}
              <div className="line-navbar"></div>
            </a>
          </li>

          <li>
            <a
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
              href="#about"
              className="group cursor-pointer
              hover:text-primary"
            >
              Acerca
              {/* line that appears when hover the link  */}
              <div className="line-navbar"></div>
            </a>
          </li>

          {/* mobile mail icon  */}
          <li className="md:hidden">
            <a className="cursor-pointer" href="mailto:lorem@ipsum.com">
              <MdEmail
                className="h-full text-2xl 
                  hover:scale-125 hover:text-primary 
                  transition-all"
              />
            </a>
          </li>
        </ul>

        <button>
          <a href="mailto:loremipsum" className="btn-secondary">
            Contactar <MdEmail className="text-xl" />
          </a>
        </button>
      </nav>
    </div>
  );
}
