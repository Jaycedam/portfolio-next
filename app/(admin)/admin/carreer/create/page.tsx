import CarreerForm from "@/components/form/carreer-form";
import { getCarreerTypeList } from "@/utils/get-data";

export default async function CreateCarreer() {
  const carreerTypeList = await getCarreerTypeList();
  return (
    <section>
      <CarreerForm typeCbo={carreerTypeList} />
    </section>
  );
}
