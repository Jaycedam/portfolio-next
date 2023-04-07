import { MdEmail } from "react-icons/md";
import Image from "next/image";
import image from "../assets/profile.jpg";

import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Hero() {
  return (
    <section
      className="container px-4 mx-auto pt-32 mb-16 grid gap-4 h-[70vh] 
        portrait:h-[50vh]
        md:h-[80vh]
        md:grid-cols-2 grid-flow-dense"
    >
      {/* image section  */}
      <div className="md:col-start-2 relative">
        {/* <Image src={image} className="w-full h-full object-cover rounded-2xl" /> */}

        {/* animated blurred blobs background */}
        <div
          className="absolute top-0 -left-4 w-96 h-96 
            bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 
            animate-blob
            dark:mix-blend-hard-light"
        ></div>
        <div
          className="absolute top-0 -right-4 w-96 h-96 
            bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 
            animate-blob animation-delay-2000
            dark:mix-blend-hard-light"
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-96 h-96 
            bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 
            animate-blob animation-delay-4000
            dark:mix-blend-hard-light"
        ></div>
      </div>

      {/* text section */}
      <div className="flex flex-col justify-center gap-8">
        {/* text  */}
        <header className="grid gap-2">
          {/* social icons  */}
          <ul className="flex gap-4 w-full text-xl text-zinc-500">
            <li>
              <a
                href="https://github.com/Jaycedam"
                target="_blank"
                className="flex gap-2 items-center text-center"
              >
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a
                href="https://dribbble.com/jaycedam"
                target="_blank"
                className="flex gap-2 items-center text-center"
              >
                <AiFillDribbbleCircle />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/jaycedam/"
                target="_blank"
                className="flex gap-2 items-center text-center"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>

          <h1
            className="font-black text-5xl md:text-6xl
              lg:text-7xl"
          >
            Developer
            <span className="text-zinc-500"> ./</span>
            <br />
            Motion
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            ipsum.
          </p>
        </header>

        {/* call to action  */}
        <button>
          <a href="#software" className="btn-primary">
            Ver proyectos
          </a>
        </button>
      </div>
    </section>
  );
}
