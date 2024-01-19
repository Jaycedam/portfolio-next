import {
  getCarreer,
  getCarreerType,
  getCarreerTypeList,
  getProject,
  getProjectArea,
  getProjectAreaList,
} from "@/utils/get-data";
import ProjectForm from "@components/form/project-form";
import ProjectAreaForm from "./form/project-area-form";
import CarreerForm from "./form/carreer-form";
import CarreerTypeForm from "./form/carreer-type-form";

/** This component allows fetching the data directly
 * so it can be used in a modal with intersecting routes,
 * wrapping in Suspense when we call this component
 * makes the modal appear before all the data is ready. */
export default async function FormLoader({
  id,
  type,
}: {
  id: number;
  type: "project" | "project-area" | "carreer" | "carreer-type";
}) {
  switch (type) {
    case "project":
      const project = await getProject(id);
      const areaList = await getProjectAreaList();
      return <ProjectForm areaCbo={areaList} project={project} />;

    case "project-area":
      const area = await getProjectArea(id);
      return <ProjectAreaForm projectArea={area} />;

    case "carreer":
      const carreer = await getCarreer(id);
      const typeList = await getCarreerTypeList();
      return <CarreerForm carreer={carreer} typeCbo={typeList} />;

    case "carreer-type":
      const type = await getCarreerType(id);
      return <CarreerTypeForm carreerType={type} />;
  }
}