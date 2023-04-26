import prisma from "../../lib/prisma";
import { Carreer } from "@prisma/client";

export default async function Carreer() {
  const carreer = await getCarreer();
  return (
    <section
      id="carreer"
      className="container relative mx-auto grid gap-4
        from-transparent via-purple-500 to-transparent
        after:absolute
        after:left-4 after:h-full after:w-1 after:bg-gradient-to-b md:w-3/4 md:after:left-2/4"
    >
      <header>
        <h1 className="title text-center">Carrera Profesional</h1>
      </header>

      {carreer.map((e, i) => (
        <div
          className="grid w-full gap-2 p-6 md:w-2/4
            md:odd:place-self-start md:odd:text-end md:even:place-self-end"
        >
          <div>
            <p className="font-thin">
              {/* gets dates, month+1 because it starts at 0 index */}
              {e.start.getMonth() + 1}/{e.start.getFullYear()} -{" "}
              {e.end && e.end.getMonth() + 1}/{e.end && e.end.getFullYear()}
            </p>
            <p className="text-lg font-bold">
              {e.name} - {e.company}
            </p>
          </div>

          <p>{e.about}</p>
        </div>
      ))}
    </section>
  );
}

async function getCarreer(): Promise<Carreer[]> {
  const result = await prisma.carreer.findMany();
  return result;
}
