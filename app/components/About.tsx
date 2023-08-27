import Image from "next/image";
import profile from "../../public/profile.webp";
import Button from "./Button";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <section
      id="about"
      className="container grid items-center gap-8 
        md:grid-flow-col md:grid-cols-2"
    >
      {/* text section  */}
      <div className="grid place-items-center text-center">
        <header>
          <h2 className="title">Acerca de mí</h2>
        </header>
        <p>
          Hola, soy Jordan Cortés, Desarrollador de Software que disfruta
          aprendiendo nuevas tecnologías. Titulado Analista Programador en Duoc
          UC - 2022.
          <br />
          <br />
          Previamente, mantuve una carrera trabajando en Motion Graphics por un
          poco más de 4 años, después de finalizar Comunicación Audiovisual en
          Santo Tomas - 2015.
          <br />
          <br />
          Para ver mis proyectos destacados Motion Graphics, visitar{" "}
          <a
            href="https://dribbble.com/Jaycedam"
            target="_blank"
            className="font-bold text-primary"
          >
            Dribbble.
          </a>
        </p>

        <div className="mt-4">
          <Button
            text="Contactar"
            link={process.env.EMAIL}
            icon={<MdEmail className="h-full w-auto" />}
          />
        </div>
      </div>

      <Image
        className="mx-auto aspect-square 
          h-auto w-2/4 
          rounded-xl object-cover 
          md:w-full"
        placeholder="blur"
        src={profile}
        alt=""
      />
    </section>
  );
}
