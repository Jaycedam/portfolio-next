import ProjectAreaForm from "@/components/form/project-area-form";
import { getProjectArea } from "@/utils/get-data";

export default async function UpdateProjectArea({
  params,
}: {
  params: { id: string };
}) {
  const data = await getProjectArea(Number(params.id));
  return (
    <section>
      <ProjectAreaForm projectArea={data} />
    </section>
  );
}
