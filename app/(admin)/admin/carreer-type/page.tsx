import SkeletonAdminTable from "@/components/skeleton/skeleton-admin-table";
import CarreerTypeTable from "@/components/table/carreer-type-table";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import { IoMdAdd } from "react-icons/io";

export default function CarreerTypeAdminPage() {
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

      <Suspense fallback={<SkeletonAdminTable />}>
        <CarreerTypeTable />
      </Suspense>
    </>
  );
}
