import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import DeleteFormButton from "../delete-form-button";
import { FaEdit } from "react-icons/fa";
import { getCarreerTypeList } from "@/utils/get-data";

export default async function CarreerTypeTable() {
  const data = await getCarreerTypeList();

  return (
    <Table>
      <TableCaption>A list of project areas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell className="flex gap-4">
              <Link
                href={`/admin/carreer-type/update/${item.id}`}
                className={buttonVariants({
                  variant: "secondary",
                  size: "icon",
                })}
              >
                <FaEdit className="h-4 w-auto" />
              </Link>
              <DeleteFormButton id={item.id} action={"carreerType"} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
