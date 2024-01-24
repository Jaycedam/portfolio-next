import { getCarreers } from "@/actions/carreer";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { buttonVariants } from "@components/ui/button";

export default async function Carreer() {
  const data = await getCarreers();
  return (
    <section id="carreer">
      <header className="space-y-4 text-center">
        <h1 className="title">Carrera Profesional</h1>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Sólo es incluída mi carrera como Programador de Software, previamente
          trabaje en Motion Graphics por más de 4 años.
        </p>
        <a
          href={process.env.CV_URL}
          className={buttonVariants({ variant: "outline" })}
        >
          Descargar CV
        </a>
      </header>

      <ol className="prose relative ml-4 border-l border-border md:mx-auto">
        {data.map((item, idx) => (
          <li key={idx} className="mb-8 ms-8 motion-reduce:fade-in">
            <span className="motion-safe:scale-up absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background  ">
              {item.type.id === 1 ? (
                <MdOutlineWorkOutline className="h-6 w-6" />
              ) : (
                <GiGraduateCap className="h-6 w-6" />
              )}
            </span>
            <h3 className="motion-safe:fade-left mb-1 flex items-center text-lg font-semibold text-foreground">
              {item.name} - {item.company}
              {/* card end of title  */}
              <span className="motion-safe:fade-left me-2 ms-3 rounded bg-muted px-2.5 py-0.5 text-sm font-medium  ">
                {item.type.name}
              </span>
            </h3>
            <time className="motion-safe:fade-left mb-2 block text-sm font-normal leading-none text-muted-foreground">
              {item.date}
            </time>
            <p className="motion-safe:fade-left mb-4 text-base font-normal text-muted-foreground">
              {item.about}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
