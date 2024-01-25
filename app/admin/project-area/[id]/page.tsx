import FormLoader from "@/components/form-loader";

export default function UpdateProjectArea({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section>
      <div className="container">
        <FormLoader id={Number(params.id)} type="project-area" />
      </div>
    </section>
  );
}
