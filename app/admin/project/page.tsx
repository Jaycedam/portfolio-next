import AdminTable from "@/components/table";
import { Button } from "@/components/ui/button";
import { getProjectAreaList, getProjectList } from "@/utils/get-data";
import { IoMdAdd } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProjectForm from "@/components/form/project-form";

export default async function ProjectAdminPage() {
  const data = await getProjectList(false);
  const areaCbo = await getProjectAreaList();

  return (
    <section>
      <header className="flex items-center gap-4">
        <h1 className="title">Project list</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <IoMdAdd className="h-4 w-auto" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ProjectForm areaCbo={areaCbo} />
          </DialogContent>
        </Dialog>
      </header>

      <AdminTable data={data} type="project" />
    </section>
  );
}
