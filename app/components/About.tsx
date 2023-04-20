import Image from "next/image";
import profile from "../assets/profile.jpg";
import StackSlide from "./StackSlide";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import Button from "./Button";

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
            <Button
              link={process.env.CV_URL}
              color="secondary"
              text="CV"
              icon={<HiDocumentText />}
            />

            <Button
              link={process.env.EMAIL}
              color="primary"
              text="Contactar"
              icon={<MdEmail />}
            />
          </div>
        </div>
        <StackSlide />
      </div>
    </section>
  );
}
