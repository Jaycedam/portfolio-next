import { FaDribbble } from "react-icons/fa";
import Image from "next/image";

export default function Motion() {
  return (
    <section
      id="motion"
      className="isolate relative
    
        after:content-[''] after:-my-8
        after:absolute after:inset-0 after:-z-10
        after:bg-zinc-200 after:skew-y-[-5deg]
        
        after:dark:bg-zinc-900"
    >
      <div className="container">
        {/* text section  */}
        <header className="flex flex-col gap-4 flex-center pb-4 place-items-center">
          <div>
            <h1 className="title">Motion Graphics</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              aliquid!
            </p>
          </div>

          <a
            className="btn-secondary"
            target="_blank"
            href="https://dribbble.com/jaycedam"
          >
            Ver más videos
            <FaDribbble className="text-xl" />
          </a>
        </header>

        {/* video section  */}
        <div className="flex-center">
          <video
            className="w-full rounded-xl shadow-xl max-w-6xl"
            controls
            loop
            src={process.env.MOTION_VIDEO_URL}
          />
        </div>
      </div>
    </section>
  );
}
