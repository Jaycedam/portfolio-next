import { getCarreerById, getCarreerTypes } from "@/utils/get-data";
import CarreerForm from "@components/form/carreer-form";

export default async function CarreerFormLoader({ id }: { id?: number }) {
  const typeList = await getCarreerTypes();

  // if id, then update
  if (id) {
    const carreer = await getCarreerById(id);
    return <CarreerForm carreer={carreer} typeCbo={typeList} />;
  }
  return <CarreerForm typeCbo={typeList} />;
}
