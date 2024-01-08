import prisma from "@/lib/prisma";
import { Carreer } from "@prisma/client";
import CarreerCard from "@/components/carreer-card";
import { ExtendedCarreer } from "@/utils/interfaces";

export default async function Carreer() {
  const carreer = await getCarreer();
  return (
    <section
      id="carreer"
      className="container relative grid gap-4 from-transparent from-5% via-primary to-transparent after:absolute after:left-4 after:h-full after:w-1 after:bg-gradient-to-b md:w-3/4 md:after:left-2/4"
    >
      <header>
        <h1 className="title text-center">Carrera Profesional</h1>
      </header>

      {carreer.map((item) => (
        <CarreerCard key={item.id} {...item} />
      ))}
    </section>
  );
}

async function getCarreer(): Promise<ExtendedCarreer[]> {
  try {
    const result = await prisma.carreer.findMany({
      include: {
        type: true,
      },
    });
    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
}
