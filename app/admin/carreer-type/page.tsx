import AdminTable from "@/components/table";
import { Button } from "@/components/ui/button";
import { getCarreerTypeList } from "@/utils/get-data";
import { IoMdAdd } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CarreerTypeForm from "@/components/form/carreer-type-form";

export default async function CarreerTypeAdminPage() {
  const data = await getCarreerTypeList();
  return (
    <section>
      <header className="flex items-center gap-4">
        <h1 className="title">Carreer Type list</h1>
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
      </header>

      <AdminTable data={data} type="carreer-type" />
    </section>
  );
}
