import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import { Plus } from "lucide-react";
import FormLoader from "@/components/form-loader";
import TableLoader from "@/components/table-loader";
import { Suspense } from "react";
import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";

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
              <Suspense>
                <FormLoader type="carreer" />
              </Suspense>
            </DialogContent>
          </Dialog>
        </div>

        <Suspense fallback={<SkeletonAdminTable />}>
          <TableLoader type="carreer" />
        </Suspense>
      </div>
    </section>
  );
}
