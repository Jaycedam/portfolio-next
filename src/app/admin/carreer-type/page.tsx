import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import CarreerTypeForm from "@components/form/carreer-type-form";
import { getCarreerTypes } from "@utils/get-data";
import DataTable from "@/components/react-table";
import { typeColumns } from "@/components/table-column-definitions";
import { Plus } from "lucide-react";

export default async function CarreerTypeAdminPage() {
  const data = await getCarreerTypes();
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
              <CarreerTypeForm />
            </DialogContent>
          </Dialog>
        </div>

        <DataTable data={data} columns={typeColumns} />
      </div>
    </section>
  );
}
