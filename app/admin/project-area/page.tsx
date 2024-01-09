import ProjectAreaTable from "@/components/project-area-table";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

export default function page() {
  return (
    <>
      <header className="flex items-center gap-4">
        <h1 className="title">Project Area list</h1>
        <Link
          className={buttonVariants({ variant: "default", size: "icon" })}
          href={"/admin/project-area/create"}
        >
          <IoMdAdd className="h-4 w-auto" />
        </Link>
      </header>
      <ProjectAreaTable />
    </>
  );
}
