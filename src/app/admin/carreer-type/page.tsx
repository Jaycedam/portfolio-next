import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";
import { getCarreerTypes } from "@/utils/get-data";
import DataTable from "@/components/react-table";
import { typeColumns } from "@/components/table-column-definitions";
import CarreerTypeForm from "@/components/form/carreer-type-form";

export default function CarreerTypeAdminPage() {
  return (
    <section>
      <div className="container space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="title">Carreer Type list</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Carreer Type</DialogTitle>
              </DialogHeader>

              <CarreerTypeForm />
            </DialogContent>
          </Dialog>
        </div>

        <Suspense fallback={<SkeletonAdminTable />}>
          <TableLoader />
        </Suspense>
      </div>
    </section>
  );
}

async function TableLoader() {
  const type = await getCarreerTypes();
  return <DataTable data={type} columns={typeColumns} />;
}
