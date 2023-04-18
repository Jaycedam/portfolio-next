import Image from "next/image";
import logo from "../../public/logoipsum.svg";
import NavToggle from "./NavToggle";
import { HiMail } from "react-icons/hi";

export default function Navbar() {
  return (
    <>
      <NavToggle />

      <nav
        id="navbar"
        data-visible="false"
        className="fixed inset-0
          z-40 h-screen w-screen 
          translate-x-full
          bg-zinc-50/70 shadow backdrop-blur-lg transition-all
          duration-500 ease-in-out

          data-[visible=true]:translate-x-0
          
          dark:bg-zinc-900/70 md:md:top-0 md:h-fit
          md:translate-x-0 md:opacity-100"
      >
        <div
          className="flex-center container
            mx-auto h-full w-full flex-col gap-12 
            md:flex-row md:justify-between md:py-2"
        >
          {/* logo section  */}
          <a
            href="#top"
            className="h-6 text-zinc-950 
            dark:invert"
          >
            <Image src={logo} alt="Logo" className="max-h-full w-auto" />
          </a>

          {/* links section */}
          <ul
            className="
              flex-center flex-col flex-wrap gap-12
              md:flex-row md:justify-end"
          >
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
          </ul>

          <a className="btn-secondary" href="#">
            Contactar
            <HiMail className="text-xl" />
          </a>
        </div>
      </nav>
    </>
  );
}
