import Image from "next/image";
import logo from "../../public/logoipsum.svg";

export default function Navbar() {
  return (
    <div
      className="w-screen p-7 fixed bottom-0 z-50
      md:bottom-auto md:top-0"
    >
      <div
        className="w-full h-14 
          rounded-2xl px-7 
          flex items-center
          bg-gray-50/70 shadow-md backdrop-blur-md
          dark:bg-neutral-800/70 dark:shadow-neutral-950"
      >
        <div className="w-1/5 h-1/3">
          <Image src={logo} alt="Logo" className="max-h-full dark:invert" />
        </div>
        <div
          className="w-4/5 flex flex-row justify-center gap-5
        md:justify-end"
        >
          <p>Proyectos</p>
          <p>Acerca</p>
          <p>Contacto</p>
        </div>
      </div>
    </div>
  );
}
