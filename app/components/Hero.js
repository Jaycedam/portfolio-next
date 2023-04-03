import Image from "next/image";
import avatar from "../assets/avatar.png";
import watermark from "../assets/hero-watermark.svg";

export default function Hero() {
  return (
    <div
      className="flex flex-col container mx-auto relative
      pt-20 pb-4 
      md:h-[60vh]
      lg:h-[80vh]
      lg:flex-row"
    >
      {/* text  */}
      <div
        className="flex-center flex-col h-2/5 z-10
        md:h-2/4
        lg:w-2/4 lg:h-full"
      >
        <h1
          className="font-black text-6xl
          md:text-7xl
          lg:text-8xl"
        >
          JORDAN
          <br />
          CORTÉS
        </h1>
        <p>SOFTWARE DEVELOPER / MOTION</p>
      </div>

      {/* image  */}
      <div
        className="flex-center h-3/5 relative z-10
        md:h-full
        lg:w-2/4 lg:h-full"
      >
        <Image
          src={avatar}
          alt="avatar"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="absolute-center w-2/5 h-full">
        <Image src={watermark} fill priority className="dark:invert" />
      </div>
    </div>
  );
}
