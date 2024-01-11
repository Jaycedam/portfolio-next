import CarreerTypeForm from "@/components/form/carreer-type-form";
import { getCarreerType } from "@/utils/get-data";

export default async function UpdateCarreerType({
  params,
}: {
  params: { id: string };
}) {
  const data = await getCarreerType(Number(params.id));
  return (
    <section>
      <CarreerTypeForm carreerType={data} />
    </section>
  );
}
