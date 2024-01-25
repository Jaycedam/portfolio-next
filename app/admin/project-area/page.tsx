import AdminTable from "@components/table";
import { Button } from "@components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import ProjectAreaForm from "@components/form/project-area-form";
import { getProjectAreas } from "@/actions/project-area";

export default async function ProjectAreaAdminPage() {
  const data = await getProjectAreas();
  return (
    <section>
      <div className="container space-y-4 overflow-hidden">
        <div className="flex items-center gap-4">
          <h1 className="heading">Project Area list</h1>
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
        </div>

        <AdminTable data={data} type="project-area" />
      </div>
    </section>
  );
}
