import { getCarreerTypeById } from "@/utils/get-data";
import CarreerTypeForm from "./carreer-type-form";

export default async function CarreerTypeFormLoader({ id }: { id?: number }) {
  // if id, then update
  if (id) {
    const type = await getCarreerTypeById(id);
    return <CarreerTypeForm carreerType={type} />;
  }
  return <CarreerTypeForm />;
}
