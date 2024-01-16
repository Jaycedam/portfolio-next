import AdminTable from "@/components/table";
import { Button } from "@/components/ui/button";
import { getProjectAreaList } from "@/utils/get-data";
import { IoMdAdd } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProjectAreaForm from "@/components/form/project-area-form";

export default async function ProjectAreaAdminPage() {
  const data = await getProjectAreaList();
  return (
    <section>
      <header className="flex items-center gap-4">
        <h1 className="title">Project Area list</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <IoMdAdd className="h-4 w-auto" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ProjectAreaForm />
          </DialogContent>
        </Dialog>
      </header>

      <AdminTable data={data} type="project-area" />
    </section>
  );
}
