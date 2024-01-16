import AdminTable from "@/components/table";
import { Button } from "@/components/ui/button";
import { getCarreerList, getCarreerTypeList } from "@/utils/get-data";
import { IoMdAdd } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CarreerForm from "@/components/form/carreer-form";

export default async function CarreerAdminPage() {
  const data = await getCarreerList();
  const typeCbo = await getCarreerTypeList();

  return (
    <section>
      <header className="flex items-center gap-4">
        <h1 className="title">Carreer list</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <IoMdAdd className="h-4 w-auto" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <CarreerForm typeCbo={typeCbo} />
          </DialogContent>
        </Dialog>
      </header>

      <AdminTable data={data} type="carreer" />
    </section>
  );
}
