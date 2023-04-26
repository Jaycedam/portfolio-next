import StackSlide from "./StackSlide";
import prisma from "../../lib/prisma";
import { Carreer, Certifications } from "@prisma/client";

export default async function About(props: { email: string; cv: string }) {
  const certifications = await getCerts();

  return (
    <section id="about">
      <div className="container grid gap-12">
        {/* info about me */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="title mb-4">Acerca de mí</h2>
            <p className="text-justify">
              Hola, soy Jordan Cortés, Desarrollador de Software que disfruta
              aprendiendo nuevas tecnologías. Titulado Analista Programador en
              Duoc UC, 2022. Previamente mantuve una carrera trabajando en
              Motion Graphics por 4 años aprox, después de terminar de estudiar
              Comunicación Audiovisual en Santo Tomas, 2015.
            </p>
          </div>

          <div className="grid">
            <h2 className="title mb-4">Certificaciones</h2>
            {certifications.map((e) => (
              <a
                className="rounded-xl bg-neutral-600/50 p-8 shadow-xl backdrop-blur-xl 
                transition-all duration-500 ease-in-out
                hover:scale-105 hover:shadow-md"
                href={e.url}
                target="_blank"
              >
                <h3 className="text-xl font-bold">{e.name}</h3>
                <p className="font-thin">{e.issuedBy}</p>
                <p>{e.about}</p>
              </a>
            ))}
          </div>
        </div>

        {/* <StackSlide /> */}
      </div>
    </section>
  );
}

// get data from database, using Prisma model interface
// update prisma interface when doing migrations with
// npx prisma generate
async function getCerts(): Promise<Certifications[]> {
  const result = await prisma.certifications.findMany();
  return result;
}
