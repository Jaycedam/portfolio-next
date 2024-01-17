import ProjectForm from "@components/form/project-form";
import { getProject, getProjectAreaList } from "@utils/get-data";

export default async function UpdateProject({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(parseInt(params.id));
  const areaList = await getProjectAreaList();
  return (
    <section>
      <ProjectForm project={project} areaCbo={areaList} />
    </section>
  );
}
