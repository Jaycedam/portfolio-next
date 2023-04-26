import Button from "./Button";
import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import image from "../../public/hero.png";

export default function Hero() {
  return (
    <section
      className="
      relative mb-0
      grid max-h-[1080px] min-h-[90vh] place-items-center pt-14"
    >
      <div
        className="
          flex-center container
          min-h-full w-full flex-col gap-8"
      >
        <header className="grid place-items-center gap-4">
          <h1 className="text-6xl font-black drop-shadow-xl md:text-8xl">
            Hola, soy
            <br />
            <span
              className="gradient animate-gradient
              bg-clip-text text-transparent "
            >
              Jordan Cortés.
            </span>
          </h1>

          <p className="max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
            labore assumenda quae explicabo veniam dolor, quisquam eius suscipit
            eum!
          </p>

          <Button link="#projects" text="Ver proyectos" icon={<FaCode />} />
        </header>

        {/* social icons  */}
        <div
          className="
            flex gap-4 text-3xl"
        >
          <a
            target="_blank"
            href="https://github.com/Jaycedam/"
            aria-label="GitHub Link"
            className="social-icon"
          >
            <AiFillGithub />
          </a>

          <a
            target="_blank"
            href="https://dribbble.com/Jaycedam"
            aria-label="Dribbble Link"
            className="social-icon"
          >
            <AiFillDribbbleCircle />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/jaycedam"
            aria-label="Linkedin Link"
            className="social-icon"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <Image
        src={image}
        priority
        fill
        alt="Hero"
        className="absolute top-0 -z-10"
      />
    </section>
  );
}
