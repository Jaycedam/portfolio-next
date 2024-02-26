import CarreerFormLoader from "@/components/form/carreer-form-loader";
import ModalDialog from "@/components/modal-dialog";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <ModalDialog title="Update Carreer">
      <CarreerFormLoader id={Number(id)} />
    </ModalDialog>
  );
}
