import { FaDribbble } from "react-icons/fa";
import Button from "./Button";

export default function Motion(props: { motion_reel: string }) {
  return (
    <section id="motion">
      <div className="container">
        {/* text section  */}
        <header className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:justify-between md:text-start">
          <div>
            <h1 className="title">Motion Graphics</h1>
            <p>
              Reel de algunos de mis proyectos en Motion Graphics, visitar link
              para ver videos destacados.
            </p>
          </div>

          <Button
            link="https://dribbble.com/jaycedam"
            text="Videos"
            icon={<FaDribbble />}
          />
        </header>

        <video
          className="aspect-[16/9] w-full rounded-xl shadow-xl"
          loop
          muted
          autoPlay
          src={props.motion_reel}
        />
      </div>
    </section>
  );
}
