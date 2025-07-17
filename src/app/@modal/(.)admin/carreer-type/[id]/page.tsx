import CarreerTypeFormLoader from "@/components/form/carreer-type-form-loader";
import ModalDialog from "@/components/modal-dialog";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const {
    id
  } = params;

  return (
    <ModalDialog title="Update Carreer Type">
      <CarreerTypeFormLoader id={Number(id)} />
    </ModalDialog>
  );
}
