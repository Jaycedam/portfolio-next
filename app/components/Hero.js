import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      className="flex-center flex-col gap-8 
        h-[60vh]
        container mx-auto pt-16
        md:h-[70vh]"
    >
      {/* text  */}
      <header className="flex-center flex-col gap-4">
        <h1
          className="font-black text-6xl
          md:text-7xl
          lg:text-8xl"
        >
          Developer
          <strong className="text-secondary"> /</strong>
          <br />
          Motion
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsum.
        </p>
      </header>

      <div>
        <button>
          <a href="mailto:loremipsum}" className="btn-primary">
            Contactar <MdEmail />
          </a>
        </button>
      </div>

      {/* image background 
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
      </div> */}
    </section>
  );
}
