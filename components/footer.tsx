import { Dribbble, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="container flex flex-col items-center justify-between gap-8 py-16 text-muted-foreground md:flex-row">
        <a href={`mailto:${process.env.EMAIL}`}>
          <p>{process.env.EMAIL}</p>
        </a>
        <div className="flex gap-8">
          <a
            href="https://github.com/Jaycedam"
            className="flex items-center gap-2"
            target="_blank"
          >
            <Github />
            <p>GitHub</p>
          </a>
          <a
            href="https://dribbble.com/jaycedam"
            className="flex items-center gap-2"
            target="_blank"
          >
            <Dribbble />
            <p>Dribble</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
