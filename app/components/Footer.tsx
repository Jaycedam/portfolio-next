import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import Image from "next/image";
import bg from "../../public/hero.png";

export default function Footer() {
  return (
    <footer className="relative py-8 pb-28">
      <div
        className="flex-center container mx-auto flex-col gap-8
          md:flex-row md:justify-between"
      >
        <a href="#top" className="flex items-center gap-2">
          <AiOutlineArrowUp /> Volver al inicio
        </a>

        <ul
          className="flex-center flex-col gap-8
          md:flex-row"
        >
          <li>
            <a
              href="https://github.com/Jaycedam"
              target="_blank"
              className="flex items-center gap-2 text-center"
            >
              <AiFillGithub />
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://dribbble.com/jaycedam"
              target="_blank"
              className="flex items-center gap-2 text-center"
            >
              <AiFillDribbbleCircle />
              Dribble
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/jaycedam/"
              target="_blank"
              className="flex items-center gap-2 text-center"
            >
              <AiFillLinkedin />
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <Image src={bg} alt="bg" className="absolute bottom-0 -z-10 rotate-180" />
    </footer>
  );
}
