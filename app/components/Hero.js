import Image from "next/image";
import watermark from "../assets/hero-watermark.svg";

export default function Hero() {
  return (
    <section
      className="flex-center container mx-auto relative
      h-[60vh]
      lg:h-[80vh]"
    >
      {/* text  */}
      <header
        className="flex-center flex-col h-2/5 z-10
        md:h-2/4
        lg:w-2/4 lg:h-full"
      >
        <h1
          className="font-black text-6xl
          md:text-7xl
          lg:text-8xl"
        >
          Developer
          <strong className="text-primary"> /</strong>
          <br />
          Motion
        </h1>
      </header>

      {/* image background  */}
      <div
        className="absolute-center w-full h-full
        md:h-3/4"
      >
        <Image
          src={watermark}
          fill
          priority
          className="dark:invert"
          alt="background image"
        />
      </div>
    </section>
  );
}
