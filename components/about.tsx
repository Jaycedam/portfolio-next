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

const items2: string[] = [
  "C#",
  "Java",
  "Spring Boot",
  "PL/SQL",
  "Bootstrap",
  "SASS",
];

function ItemBtn({ item }: { item: string }) {
  return (
    <p
      className={`motion-safe:fade-up ${buttonVariants({
        variant: "secondary",
        size: "sm",
      })}`}
    >
      {item}
    </p>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto max-w-prose space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <h2 className="heading">Acerca de mí</h2>
            <a
              href="/jordan-cortes-cv.pdf"
              target="_blank"
              className={buttonVariants({ variant: "default" })}
            >
              Descargar CV
            </a>
          </div>
        </div>

        <p className="prose text-muted-foreground">
          Hola! soy Jordan Cortés, Desarrollador de Software. Actualmente estoy
          enfocado en aprender las nuevas tecnologías de Next.js y React como
          server components, server actions, parallel routes, intercepting
          routes, etc. Todo lo voy aplicando a esta página como demostración.
        </p>

        {/* knoledge section  */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="font-bold">
              Lenguajes, librerias o frameworks que más he utilizado
            </p>
            <div className="flex flex-wrap gap-4">
              {items1.map((item, idx) => (
                <ItemBtn key={idx} item={item} />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-bold">Utilizado con menor frecuencia</p>
            <div className="flex flex-wrap gap-4">
              {items2.map((item, idx) => (
                <ItemBtn key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        <hr />

        <p className="prose font-light italic text-muted-foreground">
          Esta página está enfocada en mi carrera como programador, pero
          previamente, mantuve una carrera trabajando en Motion Graphics por más
          de 4 años. Para ver mis proyectos destacados en Motion Grapgics
          visitar &nbsp;
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
