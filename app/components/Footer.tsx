import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-between gap-8 py-16 text-muted-foreground md:flex-row">
      <a href="#">
        <p>contact@jordancortes.dev</p>
      </a>
      <div className="flex gap-8">
        <a href="#" className="flex items-center gap-2">
          <FaGithub />
          <p>GitHub</p>
        </a>
        <a href="#" className="flex items-center gap-2">
          <FaDribbble />
          <p>Dribble</p>
        </a>
        <a href="#" className="flex items-center gap-2">
          <FaLinkedin />
          <p>LinkedIn</p>
        </a>
      </div>
    </footer>
  );
}
