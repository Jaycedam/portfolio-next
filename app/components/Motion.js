import { AiFillDribbbleCircle } from "react-icons/ai";
import Image from "next/image";

export default function Motion() {
  return (
    <div id="motion" className="container container-fix mx-auto">
      {/* text section  */}
      <div
        className="flex gap-4
      md:flex-center"
      >
        <h1 className="title">Motion Graphics</h1>
        <a
          target="_blank"
          href="https://dribbble.com/jaycedam"
          className="button-primary"
        >
          <AiFillDribbbleCircle className="text-xl" />
          VER PORTAFOLIO
        </a>
      </div>

      {/* video section  */}
      <div className="flex-center">
        <video
          className="w-full rounded-xl
        md:w-3/4"
          controls
          loop
          src={process.env.MOTION_VIDEO_URL}
        />
      </div>
    </div>
  );
}
