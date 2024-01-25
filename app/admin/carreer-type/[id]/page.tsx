import FormLoader from "@/components/form-loader";

export default function UpdateCarreerType({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section>
      <div className="container">
        <FormLoader id={Number(params.id)} type="carreer-type" />
      </div>
    </section>
  );
}
