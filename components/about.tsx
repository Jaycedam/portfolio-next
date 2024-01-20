import Image from "next/image";
import profile from "/public/profile.webp";

export default function About() {
  return (
    <article id="about" className="mx-auto max-w-4xl text-foreground">
      {/* text section  */}
      <header>
        <h2 className="title">Acerca de mí</h2>
      </header>
      <p className="text-justify text-muted-foreground">
        Hola, soy Jordan Cortés, Desarrollador de Software que disfruta
        aprendiendo nuevas tecnologías. Titulado Analista Programador en Duoc UC
        - 2022.
        <br />
        <br />
        Previamente, mantuve una carrera trabajando en Motion Graphics por un
        poco más de 4 años, después de finalizar Comunicación Audiovisual en
        Santo Tomas - 2015. Para ver esos proyectos destacados visitar &nbsp;
        <a
          href="https://dribbble.com/Jaycedam"
          target="_blank"
          className="font-bold text-primary"
        >
          Dribbble.
        </a>
      </p>
    </article>
  );
}
