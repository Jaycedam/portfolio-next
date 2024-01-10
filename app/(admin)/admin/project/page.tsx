import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";
import ProjectsTable from "@/components/table/projects-table";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import { IoMdAdd } from "react-icons/io";

export default function ProjectAdminPage() {
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

      <Suspense fallback={<SkeletonAdminTable />}>
        <ProjectsTable />
      </Suspense>
    </>
  );
}
