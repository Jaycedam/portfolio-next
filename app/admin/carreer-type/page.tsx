import { Button } from "@components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import CarreerTypeForm from "@components/form/carreer-type-form";
import { getCarreerTypes } from "@/actions/carreer-type";
import { DataTable } from "@/components/react-table";
import { typeColumns } from "@/components/table-column-definitions";

export default async function CarreerTypeAdminPage() {
  const data = await getCarreerTypes();
  return (
    <section>
      <div className="container space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="heading">Carreer Type list</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <IoMdAdd className="h-4 w-auto" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <CarreerTypeForm />
            </DialogContent>
          </Dialog>
        </div>

        <DataTable type="carreer-type" data={data} columns={typeColumns} />
      </div>
    </section>
  );
}
