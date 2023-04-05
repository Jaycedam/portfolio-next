import Image from "next/image";
import logo from "../../public/logoipsum.svg";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  return (
    // container
    <div
      className="w-screen p-4 fixed bottom-0 z-50
      md:bottom-auto md:top-0 md:flex md:justify-end"
    >
      {/* navbar  */}
      <nav
        className="w-full h-16
          rounded-2xl px-4 
          flex justify-center items-center
          theme-navbar
          md:h-14 md:px-8 md:justify-between"
      >
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
          className="flex flex-row justify-center gap-5 items-center
            font-bold
            md:justify-end"
        >
          <li>
            <a href="#software" className="group cursor-pointer">
              Software
              {/* line that appears when hover the link  */}
              <div className="line-navbar"></div>
            </a>
          </li>

          <li>
            <a href="#motion" className="group cursor-pointer">
              Motion
              {/* line that appears when hover the link  */}
              <div className="line-navbar"></div>
            </a>
          </li>

          <li>
            <a href="#about" className="group cursor-pointer">
              Acerca
              {/* line that appears when hover the link  */}
              <div className="line-navbar"></div>
            </a>
          </li>

          <li>
            <a
              className="cursor-pointer text-primary"
              href="mailto:lorem@ipsum.com"
            >
              <MdEmail className="h-full text-2xl hover:scale-125 transition-all" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
