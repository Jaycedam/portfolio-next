import CarreerForm from "./form/carreer-form";
import CarreerTypeForm from "./form/carreer-type-form";
import { TableSelection } from "@/utils/types";
import {
  getCarreerById,
  getCarreerTypes,
  getCarreerTypeById,
} from "@/utils/get-data";

/** This component allows fetching the data directly
 * so it can be used in a modal with intersecting routes,
 * wrapping in Suspense when we call this component
 * makes the modal appear before all the data is ready. */
export default async function FormLoader({
  id,
  type,
}: {
  id: number;
  type: TableSelection;
}) {
  switch (type) {
    case "carreer":
      const carreer = await getCarreerById(id);
      const typeList = await getCarreerTypes();
      return <CarreerForm carreer={carreer} typeCbo={typeList} />;

    case "carreer-type":
      const type = await getCarreerTypeById(id);
      return <CarreerTypeForm carreerType={type} />;
  }
}
