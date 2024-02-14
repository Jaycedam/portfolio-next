import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import TableLoader from "@/components/table-loader";
import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";
import FormLoader from "@/components/form-loader";

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
              <Suspense>
                <FormLoader type="carreer-type" />
              </Suspense>
            </DialogContent>
          </Dialog>
        </div>

        <Suspense fallback={<SkeletonAdminTable />}>
          <TableLoader type="carreer-type" />
        </Suspense>
      </div>
    </section>
  );
}
