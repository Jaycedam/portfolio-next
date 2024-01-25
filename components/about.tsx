// import Image from "next/image";
// import profile from "/public/profile.webp";

import { buttonVariants } from "@components/ui/button";

export default function About() {
  const Item = ({ children }: { children: React.ReactNode }) => {
    return (
      <p className={buttonVariants({ variant: "secondary" })}>{children}</p>
    );
  };
  return (
    <section id="about">
      <div className="container space-y-4 text-center">
        {/* text section  */}
        <div className="flex justify-center gap-4">
          <h2 className="heading">Acerca de mí</h2>
          <a
            href={process.env.CV_URL}
            className={buttonVariants({ variant: "default" })}
          >
            Descargar CV
          </a>
        </div>

        <p className="prose mx-auto text-muted-foreground">
          Hola, soy Jordan Cortés, Desarrollador de Software que disfruta
          aprendiendo nuevas tecnologías. Titulado Analista Programador en Duoc
          UC - 2022.
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
      </div>
    </section>
  );
}
