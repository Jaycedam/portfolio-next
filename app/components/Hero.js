import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      className="flex-center flex-col gap-8
        h-[70vh]
        container px-4 mx-auto pt-16
        lg:h-[80vh]"
    >
      {/* text  */}
      <header className="flex-center flex-col gap-4">
        <h1
          className="font-black text-6xl
          md:text-7xl
          lg:text-8xl"
        >
          Developer
          <span className="text-secondary"> /</span>
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
            CONTACTAR <MdEmail className="text-xl" />
          </a>
        </button>
      </div>
    </section>
  );
}
