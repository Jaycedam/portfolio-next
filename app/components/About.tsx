import prisma from "../../lib/prisma";
import { Certifications } from "@prisma/client";
import Button from "./Button";
import Image from "next/image";
import profile from "../assets/profile.jpg";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
export default async function About(props: { email: string; cv: string }) {
  const certifications = await getCerts();

  return (
    <section id="about" className="relative">
      <div className="container grid items-center gap-8 md:grid-flow-col md:grid-cols-2">
        <Image
          className="mx-auto aspect-square h-auto w-2/4 rounded-xl object-cover md:w-full"
          src={profile}
          alt=""
        />

        <div className="col-start-1 flex flex-col gap-8">
          {/* certifications  */}
          <div className="flex justify-center gap-4">
            {certifications.map((e) => (
              <a
                target="_blank"
                href={e.url}
                key={e.id}
                className="relative
                aspect-square 
                h-auto w-1/3 transition-all duration-300 hover:scale-105"
              >
                <Image fill src={e.imageUrl} alt={e.name} />
              </a>
            ))}
          </div>

          {/* text section  */}
          <div className="text-center">
            <header>
              <h2 className="title">Acerca de mí</h2>
            </header>
            <p>
              Hola, soy Jordan Cortés, Desarrollador de Software que disfruta
              aprendiendo nuevas tecnologías. Titulado Analista Programador en
              Duoc UC - 2022.
              <br />
              <br />
              Previamente, mantuve una carrera trabajando en Motion Graphics por
              un poco más de 4 años, después de finalizar Comunicación
              Audiovisual en Santo Tomas - 2015.
              <br />
              <br />
              Para ver mis proyectos destacados Motion Graphics, visitar{" "}
              <a
                href="https://dribbble.com/Jaycedam"
                target="_blank"
                className="font-bold text-primary"
              >
                Dribbble
              </a>
              .
            </p>
          </div>

          {/* call to action  */}
          <div className="flex justify-center gap-4">
            <Button text="CV" link={props.cv} icon={<HiDocumentText />} />
            <Button text="Contactar" link={props.email} icon={<MdEmail />} />
          </div>
        </div>
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
