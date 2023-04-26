import StackSlide from "./StackSlide";
import prisma from "../../lib/prisma";
import { Certifications } from "@prisma/client";
import Button from "./Button";
import Image from "next/image";
import profile from "../assets/profile.jpg";

export default async function About(props: { email: string; cv: string }) {
  const certifications = await getCerts();

  return (
    <section id="about" className="relative">
      <div className="container grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <div>
            <h2 className="title mb-4">Acerca de mí</h2>
            <p className="text-justify">
              Hola, soy Jordan Cortés, Desarrollador de Software que disfruta
              aprendiendo nuevas tecnologías. Titulado Analista Programador en
              Duoc UC, 2022. Previamente mantuve una carrera trabajando en
              Motion Graphics por 4 años aprox, después de terminar de estudiar
              Comunicación Audiovisual en Santo Tomas, 2015.
            </p>

            <div className="mt-4 flex gap-4">
              <Button text="Ver CV" link={props.cv} />
              <Button text="Contactar" link={props.email} />
            </div>
          </div>

          <div className="col-start-1 row-start-2 grid">
            <h2 className="title mb-4">Certificaciones</h2>
            {certifications.map((e) => (
              <a
                key={e.id}
                className="rounded-xl border-2
                border-zinc-50/30 bg-zinc-500/20
                  p-8
                  shadow-xl backdrop-blur-lg
                  transition-all
                  duration-300
                  ease-in-out hover:scale-105 hover:bg-zinc-300/20
                  hover:shadow-xl active:scale-95"
                href={e.url}
                target="_blank"
              >
                <h3 className="text-xl font-bold">{e.name}</h3>
                <p className="font-thin">{e.issuedBy}</p>
                <p>{e.about}</p>
              </a>
            ))}
          </div>

          <StackSlide />
        </div>

        <Image
          className="h-auto w-full rounded-xl object-cover"
          src={profile}
          alt=""
        />
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
