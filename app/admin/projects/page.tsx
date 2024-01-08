import ProjectsTable from "@/components/projects-table";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <header className="flex items-center gap-4">
        <h1 className="title">Projects</h1>
        <Link
          className={buttonVariants({ variant: "default" })}
          href={"/admin/projects/create"}
        >
          Create
        </Link>
      </header>
      <ProjectsTable />
    </>
  );
}
