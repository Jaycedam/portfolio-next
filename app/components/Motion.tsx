import { FaDribbble } from "react-icons/fa";
import Button from "./Button";

export default function Motion(props: { motion_reel: string }) {
  return (
    <section id="motion" className="isolate">
      <div className="container md:px-20">
        {/* text section  */}
        <header
          className="flex-center flex-col gap-4 pb-4
            md:flex-row md:justify-between md:text-start"
        >
          <div>
            <h1 className="title">Motion Graphics Reel</h1>
            <p>Ve más videos destacados en Dribbble.</p>
          </div>

          <Button
            link="https://dribbble.com/jaycedam"
            text="Videos"
            icon={<FaDribbble />}
            color="secondary"
          />
        </header>

        <video
          className="aspect-[16/9] w-full rounded-xl shadow-xl"
          controls
          loop
          src={props.motion_reel}
        />
      </div>
    </section>
  );
}
