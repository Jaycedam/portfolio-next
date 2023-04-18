import Image from "next/image";
import profile from "../assets/profile.jpg";
import StackSlide from "./StackSlide";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

export default function About() {
  return (
    <section id="about">
      <div className="container grid gap-8">
        {/* info about me */}
        <div className="flex-center flex-col gap-8">
          <Image
            alt=""
            src={profile}
            className="aspect-square h-auto w-2/4 rounded-full
            md:w-80"
          />
          <header>
            <h1 className="title mb-4">Acerca de mi</h1>
            <p className="max-w-lg text-justify">
              Hola, soy Jordan Cortés, Desarrollador de Software que disfruta
              aprendiendo nuevas tecnologías. Titulado Analista Programador en
              Duoc UC, 2022. Previamente mantuve una carrera trabajando en
              Motion Graphics por 4 años aprox, después de terminar de estudiar
              Comunicación Audiovisual en Santo Tomas, 2015.
            </p>
          </header>
          <div className="flex gap-8">
            <a
              href={process.env.CV_URL}
              target="_blank"
              className="btn-secondary"
            >
              CV
              <span className="text-lg">
                <HiDocumentText />
              </span>
            </a>
            <a
              href={
                "mailto:" +
                process.env.EMAIL +
                "?subject=Contacto desde jordancortes.dev"
              }
              className="btn-primary"
            >
              Contactar
              <span className="text-xl">
                <MdEmail />
              </span>
            </a>
          </div>
        </div>
        <StackSlide />
      </div>
    </section>
  );
}
