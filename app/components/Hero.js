import Image from "next/image";
import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <div
      className="flex flex-col container mx-auto
      pt-20 h-[80vh]
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
        className="relative flex-center h-3/5 z-10
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
    </div>
  );
}
