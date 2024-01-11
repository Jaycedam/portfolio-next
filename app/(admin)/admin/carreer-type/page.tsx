import AdminTable from "@/components/table";
import { buttonVariants } from "@/components/ui/button";
import { getCarreerTypeList } from "@/utils/get-data";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

export default async function CarreerTypeAdminPage() {
  const data = await getCarreerTypeList();
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

      <AdminTable data={data} type="carreer-type" />
    </>
  );
}
