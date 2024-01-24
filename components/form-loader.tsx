import ProjectForm from "@components/form/project-form";
import ProjectAreaForm from "./form/project-area-form";
import CarreerForm from "./form/carreer-form";
import CarreerTypeForm from "./form/carreer-type-form";
import { getProjectById } from "@/actions/project";
import { getProjectAreaById, getProjectAreas } from "@/actions/project-area";
import { getCarreerById } from "@/actions/carreer";
import { getCarreerTypeById, getCarreerTypes } from "@/actions/carreer-type";
import { TableSelection } from "@/utils/types";

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
    case "project":
      const project = await getProjectById(id);
      const areaList = await getProjectAreas();
      return <ProjectForm areaCbo={areaList} project={project} />;

    case "project-area":
      const area = await getProjectAreaById(id);
      return <ProjectAreaForm projectArea={area} />;

    case "carreer":
      const carreer = await getCarreerById(id);
      const typeList = await getCarreerTypes();
      return <CarreerForm carreer={carreer} typeCbo={typeList} />;

    case "carreer-type":
      const type = await getCarreerTypeById(id);
      return <CarreerTypeForm carreerType={type} />;
  }
}
