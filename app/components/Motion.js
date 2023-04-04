import { FaDribbble } from "react-icons/fa";

export default function Motion() {
  return (
    <section id="motion" className="container container-fix mx-auto">
      {/* text section  */}
      <header className="flex gap-4 flex-center pb-4">
        <h1 className="title">Motion Graphics</h1>
        <a
          target="_blank"
          href="https://dribbble.com/jaycedam"
          className="button-primary"
        >
          VIDEOS
          <FaDribbble className="text-xl" />
        </a>
      </header>

      {/* video section  */}
      <div className="flex-center">
        <video
          className="w-full rounded-xl shadow-md
          lg:w-3/4"
          controls
          loop
          src={process.env.MOTION_VIDEO_URL}
        />
      </div>
    </section>
  );
}
