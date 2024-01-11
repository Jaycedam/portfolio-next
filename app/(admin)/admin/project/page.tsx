import AdminTable from "@/components/table";
import { buttonVariants } from "@/components/ui/button";
import { getProjectList } from "@/utils/get-data";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

export default async function ProjectAdminPage() {
  const data = await getProjectList(false);

  return (
    <>
      <header className="flex items-center gap-4">
        <h1 className="title">Project list</h1>
        <Link
          className={buttonVariants({ variant: "default", size: "icon" })}
          href={"/admin/project/create"}
        >
          <IoMdAdd className="h-4 w-auto" />
        </Link>
      </header>

      <AdminTable data={data} type="project" />
    </>
  );
}
