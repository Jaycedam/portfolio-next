import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import CarreerForm from "@components/form/carreer-form";
import { getCarreers, getCarreerTypes } from "@utils/get-data";
import DataTable from "@/components/react-table";
import { carreerColumns } from "@/components/table-column-definitions";
import { Plus } from "lucide-react";

export default async function CarreerAdminPage() {
  const data = await getCarreers();
  const cbo = await getCarreerTypes();

  return (
    <section>
      <div className="container space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="heading">Carreer list</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <CarreerForm typeCbo={cbo} />
            </DialogContent>
          </Dialog>
        </div>

        <DataTable data={data} columns={carreerColumns} />
      </div>
    </section>
  );
}
