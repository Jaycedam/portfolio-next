import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";
import CarreerTable from "@/components/table/carreer-table";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import { IoMdAdd } from "react-icons/io";

export default function CarreerAdminPage() {
  return (
    <>
      <header className="flex items-center gap-4">
        <h1 className="title">Carreer list</h1>
        <Link
          className={buttonVariants({ variant: "default", size: "icon" })}
          href={"/admin/carreer/create"}
        >
          <IoMdAdd className="h-4 w-auto" />
        </Link>
      </header>

      <Suspense fallback={<SkeletonAdminTable />}>
        <CarreerTable />
      </Suspense>
    </>
  );
}
