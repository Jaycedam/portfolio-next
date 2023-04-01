import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8
      bg-slate-300 
    dark:bg-neutral-900 p-8 pb-28
    md:flex-row md:justify-end"
    >
      <a
        href="https://github.com/Jaycedam"
        target="_blank"
        className="flex gap-2 items-center text-center"
      >
        <AiFillGithub />
        GitHub
      </a>
      <a
        href="https://dribbble.com/jaycedam"
        target="_blank"
        className="flex gap-2 items-center text-center"
      >
        <AiFillDribbbleCircle />
        Dribble
      </a>
      <a
        href="https://www.linkedin.com/in/jaycedam/"
        target="_blank"
        className="flex gap-2 items-center text-center"
      >
        <AiFillLinkedin />
        Linkedin
      </a>
    </div>
  );
}
