import FormLoader from "@/components/form-loader";

export default function UpdateProject({ params }: { params: { id: string } }) {
  return (
    <section>
      <div className="container space-y-4">
        <FormLoader id={Number(params.id)} type="project" />
      </div>
    </section>
  );
}
