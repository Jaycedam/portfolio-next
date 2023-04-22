import Button from "./Button";
import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="
      relative
      isolate mb-4 mt-16 grid place-items-center
      overflow-hidden rounded-b-3xl py-24"
    >
      <div
        className="
          flex-center container relative
          min-h-full w-full flex-col gap-8"
      >
        <header className="grid gap-2">
          <h1
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 
              bg-clip-text text-8xl font-black text-transparent drop-shadow-md"
          >
            Hola, soy
            <br />
            Jordan Cortés.
          </h1>

          <h2 className="mx-auto text-2xl font-bold">
            Desarrollador de Software y Motion Graphics.
          </h2>

          <p className="mx-auto max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum
            dignissimos pariatur esse sed laudantium quidem voluptatem.
          </p>
        </header>

        <Button
          link="#projects"
          color="secondary"
          text="Ver proyectos"
          icon={<FaCode />}
        />

        {/* social icons  */}
        <div
          className="
            flex gap-4 text-3xl"
        >
          <a
            target="_blank"
            href="#"
            aria-label="GitHub Link"
            className="social-icon"
          >
            <AiFillGithub />
          </a>

          <a
            target="_blank"
            href="#"
            aria-label="Dribbble Link"
            className="social-icon"
          >
            <AiFillDribbbleCircle />
          </a>

          <a
            target="_blank"
            href="#"
            aria-label="Linkedin Link"
            className="social-icon"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
