import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <footer
      className="container flex flex-col items-center justify-center gap-8 py-16
        md:flex-row md:justify-between"
    >
      <a href="#top" className="flex items-center gap-2">
        <AiOutlineArrowUp /> Volver al inicio
      </a>

      <ul
        className="flex flex-col items-center gap-8 text-2xl
          md:flex-row"
      >
        <li>
          <a
            href="https://github.com/Jaycedam"
            target="_blank"
            className="flex items-center gap-2 text-center"
          >
            <AiFillGithub />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/jaycedam/"
            target="_blank"
            className="flex items-center gap-2 text-center"
          >
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}
