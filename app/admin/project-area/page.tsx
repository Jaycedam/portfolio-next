import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import ProjectAreaForm from "@components/form/project-area-form";
import { getProjectAreas } from "@utils/get-data";
import { DataTable } from "@/components/react-table";
import { areaColumns } from "@/components/table-column-definitions";
import { Plus } from "lucide-react";

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
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <ProjectAreaForm />
            </DialogContent>
          </Dialog>
        </div>

        <DataTable data={data} columns={areaColumns} />
      </div>
    </section>
  );
}
