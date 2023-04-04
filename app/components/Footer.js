import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer
      className="theme-footer p-8 pb-28 
      flex gap-4"
    >
      <ul
        className="flex flex-col items-center justify-center gap-8
        w-full
        md:flex-row md:justify-end"
      >
        <li>
          <a href="#top" className="flex items-center gap-2">
            <AiOutlineArrowUp /> Volver al inicio
          </a>
        </li>

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
    </footer>
  );
}
