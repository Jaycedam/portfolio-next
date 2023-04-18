import { FaDribbble } from "react-icons/fa";

export default function Motion() {
  return (
    <section
      id="motion"
      className="relative isolate
    
        after:absolute after:inset-0
        after:-z-10 after:-my-8 after:skew-y-[-5deg]
        after:bg-zinc-200 after:content-['']
        
        after:dark:bg-zinc-900"
    >
      <div className="container md:px-20">
        {/* text section  */}
        <header
          className="flex-center flex flex-col place-items-center gap-4 pb-4
            md:flex-row md:justify-between md:text-start"
        >
          <div>
            <h1 className="title">Motion Graphics</h1>
            <p>
              Reel de proyectos Motion. Para ver más, click en botón para
              visitar Dribbble.
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

        <video
          className="aspect-[16/9] w-full rounded-xl shadow-xl"
          controls
          loop
          src={process.env.MOTION_VIDEO_URL}
        />
      </div>
    </section>
  );
}
