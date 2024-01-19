import FormLoader from "@/components/form-loader";

export default function UpdateProject({ params }: { params: { id: string } }) {
  return (
    <section className="px-4">
      <FormLoader id={Number(params.id)} type="project" />
    </section>
  );
}