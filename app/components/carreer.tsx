import { Carreer } from "@prisma/client";
import CarreerCard from "@/components/carreer-card";
import { getCarreerList } from "@/utils/get-data";

export default async function Carreer() {
  const carreer = await getCarreerList();
  return (
    <section
      id="carreer"
      className="relative mx-auto grid gap-4 from-transparent from-5% via-primary to-transparent after:absolute after:left-0 after:h-full after:w-1 after:bg-gradient-to-b md:w-3/4 md:after:left-2/4"
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
