import AdminTable from "@components/table";
import { Button } from "@components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import ProjectForm from "@components/form/project-form";
import { getProjects } from "@/actions/project";
import { getProjectAreas } from "@/actions/project-area";

export default async function ProjectAdminPage() {
  const data = await getProjects(false);
  const cbo = await getProjectAreas();

  return (
    <>
      <header className="flex items-center gap-4">
        <h1 className="title">Project list</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <IoMdAdd className="h-4 w-auto" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ProjectForm areaCbo={cbo} />
          </DialogContent>
        </Dialog>
      </header>

      <AdminTable data={data} type="project" />
    </>
  );
}
