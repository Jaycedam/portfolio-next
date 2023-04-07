import Image from "next/image";
import profile from "../assets/avatar2.png";
import TimelineCard from "./TimelineCard";
import StackSlide from "./StackSlide";
import data from "@/mockup/carreer";

export default function About() {
  return (
    <section id="about" className="container container-fix mx-auto">
      <div
        className="grid gap-4
          md:grid-cols-2"
      >
        <div className="grid gap-8">
          {/* about me desc  */}
          <div>
            <header>
              <h1 className="title">Acerca de mi</h1>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              esse officiis tempore minus odit natus et reprehenderit
              architecto, modi rem?
            </p>
          </div>

          <div>
            <div className="timeline">
              {data.map((e) => (
                <TimelineCard
                  id={e.id}
                  type={e.type}
                  title={e.title}
                  date={e.date}
                  desc={e.desc}
                />
              ))}
            </div>
          </div>
        </div>

        {/* image side  */}
        <div>
          <Image
            src={profile}
            className="rounded-3xl aspect-[4/3] object-contain
            md:h-full md:aspect-auto"
            alt="about me image"
          />
        </div>
      </div>

      <StackSlide />
    </section>
  );
}
