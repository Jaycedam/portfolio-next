import CarreerFormLoader from "@/components/form/carreer-form-loader";
import ModalDialog from "@/components/modal-dialog";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const {
    id
  } = params;

  return (
    <ModalDialog title="Update Carreer">
      <CarreerFormLoader id={Number(id)} />
    </ModalDialog>
  );
}
