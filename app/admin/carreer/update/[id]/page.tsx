import CarreerForm from "@/components/form/carreer-form";
import { getCarreer, getCarreerTypeList } from "@/utils/get-data";

export default async function UpdateCarreer({
  params,
}: {
  params: { id: string };
}) {
  const data = await getCarreer(Number(params.id));
  const carreerTypeList = await getCarreerTypeList();
  return (
    <section>
      <CarreerForm carreer={data} typeCbo={carreerTypeList} />
    </section>
  );
}
