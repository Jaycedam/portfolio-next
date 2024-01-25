import FormLoader from "@/components/form-loader";

export default function UpdateCarreer({ params }: { params: { id: string } }) {
  return (
    <section>
      <div className="container">
        <FormLoader id={Number(params.id)} type="carreer" />
      </div>
    </section>
  );
}
