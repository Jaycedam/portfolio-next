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
            className="rounded-full w-2/4 h-auto aspect-square
            md:w-80"
          />
          <header>
            <h1 className="title">Acerca de mi</h1>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              esse officiis tempore minus odit natus et reprehenderit
              architecto, modi rem?
            </p>
          </header>
          <div className="flex gap-8">
            <a href="#" className="btn-secondary">
              CV
              <span className="text-lg">
                <HiDocumentText />
              </span>
            </a>
            <a href="#" className="btn-primary">
              Contactar
              <span className="text-lg">
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
