import Image from "next/image";
import logo from "../../public/logoipsum.svg";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  return (
    // container
    <div
      className="w-screen p-4 fixed bottom-0 z-50
      md:bottom-auto md:top-0"
    >
      {/* navbar  */}
      <div
        className="w-full h-16 
          rounded-2xl px-4 
          flex justify-center items-center gap-5
          bg-gray-50/75 shadow-sm backdrop-blur-md
          dark:bg-neutral-800/75 dark:shadow-neutral-950
          md:justify-between md:h-14 md:px-8"
      >
        {/* logo section  */}
        <div
          className="hidden 
          md:block md:h-1/3
          dark:invert"
        >
          <Image src={logo} alt="Logo" className="max-h-full" />
        </div>

        {/* links section */}
        <div
          className="flex flex-row justify-center gap-5 items-center
          md:justify-end text-sm"
        >
          <a
            href="#top"
            className="hidden group cursor-pointer
            md:block"
          >
            INICIO
            {/* line that appears when hover the link  */}
            <div className="line-navbar"></div>
          </a>

          <a href="#software" className="group cursor-pointer">
            SOFTWARE
            {/* line that appears when hover the link  */}
            <div className="line-navbar"></div>
          </a>

          <a href="#motion" className="group cursor-pointer">
            MOTION
            {/* line that appears when hover the link  */}
            <div className="line-navbar"></div>
          </a>

          <a href="#info" className="group cursor-pointer">
            INFO
            {/* line that appears when hover the link  */}
            <div className="line-navbar"></div>
          </a>

          <a
            className="group cursor-pointer
            transition-all
            hover:scale-125 hover:text-primary"
            href="mailto:lorem@ipsum.com"
          >
            <MdEmail className="h-full text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
