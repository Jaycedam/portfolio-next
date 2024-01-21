import { FaGithub, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center justify-between gap-8 border-t px-4 py-16 text-muted-foreground md:flex-row md:px-8">
      <a href={`mailto:${process.env.EMAIL}`}>
        <p>{process.env.EMAIL}</p>
      </a>
      <div className="flex gap-8">
        <a
          href="https://github.com/Jaycedam"
          className="flex items-center gap-2"
          target="_blank"
        >
          <FaGithub />
          <p>GitHub</p>
        </a>
        <a
          href="https://dribbble.com/jaycedam"
          className="flex items-center gap-2"
          target="_blank"
        >
          <FaDribbble />
          <p>Dribble</p>
        </a>
      </div>
    </footer>
  );
}
