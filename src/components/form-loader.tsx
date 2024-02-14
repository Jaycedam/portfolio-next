import CarreerForm from "./form/carreer-form";
import CarreerTypeForm from "./form/carreer-type-form";
import { TableSelection } from "@/utils/types";
import {
  getCarreerById,
  getCarreerTypes,
  getCarreerTypeById,
} from "@/utils/get-data";

/**
 *
 * @description Pass the id to update the entity, otherwise it creates a new one. It renders the form of the type selected.
 */
export default async function FormLoader({
  id,
  type,
}: {
  id?: number;
  type: TableSelection;
}) {
  switch (type) {
    case "carreer":
      const typeList = await getCarreerTypes();

      // if id, then update
      if (id) {
        const carreer = await getCarreerById(id);
        return <CarreerForm carreer={carreer} typeCbo={typeList} />;
      }
      return <CarreerForm typeCbo={typeList} />;

    case "carreer-type":
      // if id, then update
      if (id) {
        const type = await getCarreerTypeById(id);
        return <CarreerTypeForm carreerType={type} />;
      }
      return <CarreerTypeForm />;
  }
}
