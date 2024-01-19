import { Suspense } from "react";
import ModalDialog from "@/components/modal-dialog";
import FormLoader from "@/components/form-loader";
import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <ModalDialog>
      <Suspense fallback={<SkeletonAdminTable />}>
        <FormLoader id={Number(params.id)} type="carreer" />
      </Suspense>
    </ModalDialog>
  );
}
