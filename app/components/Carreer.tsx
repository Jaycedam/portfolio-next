import prisma from "../../lib/prisma";
import { Carreer } from "@prisma/client";
import { CarreerType } from "../../utils/enums";

const options = { year: "numeric", month: "long" };

export default async function Carreer() {
  const carreer = await getCarreer();
  return (
    <section
      id="carreer"
      className="container relative grid gap-4
        from-transparent via-purple-500 to-transparent
        after:absolute
        after:left-4 after:h-full after:w-1 after:bg-gradient-to-b md:w-3/4 md:after:left-2/4"
    >
      <header>
        <h1 className="title text-center">Carrera Profesional</h1>
      </header>

      {carreer.map((e, i) => (
        <div
          key={e.id}
          className="grid w-full p-6 md:w-2/4
            md:odd:place-self-start md:odd:text-end md:even:place-self-end"
        >
          <p className="text-sm font-light">
            <span className="font-normal uppercase">
              {CarreerType[e.typeId]}{" "}
            </span>

            {e.start.toLocaleDateString("es-ES", {
              month: "short",
              year: "numeric",
            }) + " - "}
            {e.end &&
              e.end.toLocaleDateString("es-ES", {
                month: "short",
                year: "numeric",
              })}
          </p>

          <p className="text-lg font-bold">
            {e.name} - {e.company}
          </p>

          <p className="mt-1">{e.about}</p>
        </div>
      ))}
    </section>
  );
}

async function getCarreer(): Promise<Carreer[]> {
  const result = await prisma.carreer.findMany();
  return result;
}
