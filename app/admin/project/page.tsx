import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import ProjectForm from "@components/form/project-form";
import { getProjectAreas, getProjects } from "@utils/get-data";
import { DataTable } from "@/components/react-table";
import { projectColumns } from "@/components/table-column-definitions";
import { Plus } from "lucide-react";

export default async function ProjectAdminPage() {
  const data = await getProjects();
  const cbo = await getProjectAreas();

  return (
    <section className="overflow-hidden">
      <div className="container space-y-4 overflow-auto">
        <div className="flex items-center gap-4">
          <h1 className="heading">Project list</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <ProjectForm areaCbo={cbo} />
            </DialogContent>
          </Dialog>
        </div>

        <DataTable data={data} columns={projectColumns} />
      </div>
    </section>
  );
}
