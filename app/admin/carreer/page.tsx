import AdminTable from "@components/table";
import { Button } from "@components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import CarreerForm from "@components/form/carreer-form";
import { getCarreers } from "@/actions/carreer";
import { getCarreerTypes } from "@/actions/carreer-type";

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
                <IoMdAdd className="h-4 w-auto" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <CarreerForm typeCbo={cbo} />
            </DialogContent>
          </Dialog>
        </div>

        <AdminTable data={data} type="carreer" />
      </div>
    </section>
  );
}
