import CarreerTypeFormLoader from "@/components/form/carreer-type-form-loader";
import ModalDialog from "@/components/modal-dialog";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <ModalDialog title="Update Carreer Type">
      <CarreerTypeFormLoader id={Number(id)} />
    </ModalDialog>
  );
}
