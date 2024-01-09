import CarreerTypeTable from "@/components/carreer-type-table";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

export default function page() {
  return (
    <>
      <header className="flex items-center gap-4">
        <h1 className="title">Carreer Type list</h1>
        <Link
          className={buttonVariants({ variant: "default", size: "icon" })}
          href={"/admin/carreer-type/create"}
        >
          <IoMdAdd className="h-4 w-auto" />
        </Link>
      </header>
      <CarreerTypeTable />
    </>
  );
}
