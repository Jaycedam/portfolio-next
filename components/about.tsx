import Image from "next/image";
import profile from "/public/profile.webp";

import { buttonVariants } from "@components/ui/button";

const items1: string[] = [
  "Next.js",
  "React",
  "Typescript",
  "TailwindCSS",
  "SQL",
  "Prisma",
  "Python",
  "Django",
  "Framer Motion",
  "Zod",
  "React Hook Form",
];

const items2: string[] = ["C#", "Java", "Spring Boot", "Bootstrap", "SASS"];

const ItemBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className={`motion-safe:fade-right ${buttonVariants({
        variant: "outline",
        size: "sm",
      })}`}
    >
      {children}
    </p>
  );
};

export default function About() {
  return (
    <section id="about">
      <div className="container relative grid gap-2 space-y-8 lg:grid-cols-[40%_1fr] lg:gap-8">
        {/* image section */}
        <div className="relative mx-auto aspect-square w-2/4 max-w-[10rem] lg:aspect-auto lg:w-full lg:max-w-none">
          <Image
            src={profile}
            alt=""
            fill
            sizes="50vw"
            className="rounded-full object-cover lg:rounded-xl"
          />
        </div>

        {/* text section */}
        <div className="mx-auto flex flex-col items-center space-y-8 text-center lg:items-start lg:text-start">
          <div className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <h2 className="heading">Acerca de mí</h2>
              <a
                href={process.env.CV_URL}
                className={buttonVariants({ variant: "default" })}
              >
                Descargar CV
              </a>
            </div>
          </div>

          <p className="prose text-muted-foreground">
            Hola, soy Jordan Cortés, Titulado Analista Programador. Actualmente
            estoy enfocado en aprender las nuevas tecnologías de Next.js y React
            como server components, server actions, parallel routes,
            intercepting routes, etc. Todo lo voy aplicando a esta página como
            demostración. Actualmente en búsqueda de trabajo.
          </p>

          {/* knoledge section  */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="font-bold">
                Lenguajes, librerias o frameworks que más he utilizado
              </p>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                {items1.map((item, idx) => (
                  <ItemBtn key={idx}>{item}</ItemBtn>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-bold">Utilizado con menor frecuencia</p>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                {items2.map((item, idx) => (
                  <ItemBtn key={idx}>{item}</ItemBtn>
                ))}
              </div>
            </div>
          </div>

          <p className="prose text-muted-foreground">
            Esta página está enfocada en mi carrera como programador, pero
            previamente, mantuve una carrera trabajando en Motion Graphics por
            más de 4 años, bajo mi título de Comunicación Audiovisual, 2015.
            Para ver mis proyectos destacados en Motion Grapgics visitar &nbsp;
            <a
              href="https://dribbble.com/Jaycedam"
              target="_blank"
              className="font-bold text-primary"
            >
              Dribbble.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
