import { FaDribbble } from "react-icons/fa";
import MotionGallery from "./MotionGallery";

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
      <div className="container max-w-5xl">
        {/* text section  */}
        <header
          className="flex flex-col gap-4 flex-center pb-4 place-items-center
            md:flex-row md:text-start md:justify-between"
        >
          <div>
            <h1 className="title">Motion: Destacados</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              aliquid!
            </p>
          </div>

          <a
            className="btn-primary"
            target="_blank"
            href="https://dribbble.com/jaycedam"
          >
            Ver más videos
            <FaDribbble className="text-xl" />
          </a>
        </header>

        <MotionGallery />
      </div>
    </section>
  );
}
