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
import DeleteFormButton from "@/components/delete-form-button";
import { FaEdit } from "react-icons/fa";
import { getCarreerList } from "@/utils/get-data";

export default async function CarreerTable() {
  const data = await getCarreerList();

  return (
    <Table>
      <TableCaption>Carreer list.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>About</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.company}</TableCell>
            <TableCell>{item.about}</TableCell>
            <TableCell>{item.type.name}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell className="flex gap-4">
              <Link
                href={`/admin/carreer/update/${item.id}`}
                className={buttonVariants({
                  variant: "secondary",
                  size: "icon",
                })}
              >
                <FaEdit className="h-4 w-auto" />
              </Link>
              <DeleteFormButton id={item.id} action={"carreer"} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
