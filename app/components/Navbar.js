import Image from "next/image";
import logo from "../../public/logoipsum.svg";
import NavToggle from "./NavToggle";

export default function Navbar() {
  return (
    <>
      <NavToggle />
      <nav
        id="navbar"
        data-visible="false"
        className="bg-zinc-50/70 backdrop-blur-lg w-full h-screen
          fixed bottom-0 right-0 z-40 
          translate-x-full opacity-0 shadow
          data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100
          transition-all ease-in-out duration-500

          dark:bg-zinc-900/70
          
          md:bottom-auto md:top-0 md:h-auto md:min-h-[3rem]
          md:translate-x-0 md:opacity-100"
      >
        <div
          className="container mx-auto
            h-full w-full flex-center flex-col gap-12 
            md:justify-between md:flex-row md:py-2"
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
          </ul>

          <a className="btn-secondary" href="#">
            Contactar
          </a>
        </div>
      </nav>
    </>
  );
}
