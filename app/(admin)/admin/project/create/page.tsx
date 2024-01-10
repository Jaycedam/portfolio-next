import ProjectForm from "@/components/form/project-form";
import { getProjectAreaList } from "@/utils/get-data";

export default async function CreateProject() {
  const areaList = await getProjectAreaList();
  return <ProjectForm areaCbo={areaList} />;
}
