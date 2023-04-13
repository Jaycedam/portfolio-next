import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="theme-footer py-8 pb-28">
      <div
        className="container mx-auto flex-center flex-col gap-8
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
              className="flex gap-2 items-center text-center"
            >
              <AiFillGithub />
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://dribbble.com/jaycedam"
              target="_blank"
              className="flex gap-2 items-center text-center"
            >
              <AiFillDribbbleCircle />
              Dribble
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/jaycedam/"
              target="_blank"
              className="flex gap-2 items-center text-center"
            >
              <AiFillLinkedin />
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
