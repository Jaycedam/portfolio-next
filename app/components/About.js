import Image from "next/image";
import profile from "../assets/profile.jpg";
import StackSlide from "./StackSlide";

export default function About() {
  return (
    <section id="about" className="container container-fix mx-auto">
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {/* info about me */}
        <div className="col-span-2">
          <header>
            <h1 className="title">Acerca de mi</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              esse officiis tempore minus odit natus et reprehenderit
              architecto, modi rem?
            </p>
          </header>
          <StackSlide />
        </div>

        <Image src={profile} className="h-full object-cover rounded-xl" />
      </div>
    </section>
  );
}
