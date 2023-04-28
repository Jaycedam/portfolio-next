import prisma from "../../lib/prisma";
import { Certifications } from "@prisma/client";
import Button from "./Button";
import Image from "next/image";
import profile from "../assets/profile.jpg";
import bg from "../../public/bg2.webp";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

export default async function About(props: { email: string; cv: string }) {
  const certifications = await getCerts();

  return (
    <section id="about" className="relative">
      <div className="container grid gap-8 md:grid-flow-col md:grid-cols-2">
        <Image
          className="h-auto w-full rounded-xl object-cover"
          src={profile}
          alt=""
        />

        <div className="col-start-1 flex flex-col gap-16">
          <div>
            <h2 className="title mb-4">Acerca de mí</h2>
            <p>
              Hola, soy Jordan Cortés, Desarrollador de Software que disfruta
              aprendiendo nuevas tecnologías. Titulado Analista Programador en
              Duoc UC, 2022. Previamente mantuve una carrera trabajando en
              Motion Graphics por 4 años aprox, después de terminar de estudiar
              Comunicación Audiovisual en Santo Tomas, 2015.
            </p>

            <div className="mt-4 flex gap-4">
              <Button text="Ver CV" link={props.cv} icon={<HiDocumentText />} />
              <Button text="Contactar" link={props.email} icon={<MdEmail />} />
            </div>
          </div>

          <div className="col-start-1 row-start-2 grid">
            <h2 className="title mb-4">Certificaciones</h2>
            {certifications.map((e) => (
              <a
                target="_blank"
                href={e.url}
                key={e.id}
                className="grid gap-2 rounded-xl 
                border-[1px] border-zinc-100/20 
                bg-zinc-500/20 
                p-4 backdrop-blur-lg 
                transition-all duration-500 
                hover:scale-105 hover:bg-zinc-500/40"
              >
                <h3 className="text-xl font-bold">{e.name}</h3>
                <p className="font-thin">Issued by: {e.issuedBy}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Image src={bg} alt="" fill className="absolute bottom-0 -z-10" />
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
