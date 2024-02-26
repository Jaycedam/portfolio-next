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
import { getCarreers } from "@/utils/get-data";
import DataTable from "@/components/react-table";
import { carreerColumns } from "@/components/table-column-definitions";
import CarreerFormLoader from "@/components/form/carreer-form-loader";

export default function CarreerAdminPage() {
  return (
    <section>
      <div className="container space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="title">Carreer list</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Carreer</DialogTitle>
              </DialogHeader>
              <Suspense fallback={<SkeletonAdminTable />}>
                <CarreerFormLoader />
              </Suspense>
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
  const carreer = await getCarreers();
  return <DataTable data={carreer} columns={carreerColumns} />;
}
