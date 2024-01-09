import ProjectForm from "@/components/form/project-form";
import { getProjectAreaList } from "@/utils/get-data";

export default async function page() {
  const areaList = await getProjectAreaList();
  return <ProjectForm areaCbo={areaList} />;
}
