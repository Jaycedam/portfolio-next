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
import DeleteFormButton from "./delete-form-button";
import { FaEdit } from "react-icons/fa";
import { getProjectAreaList } from "@/utils/get-data";

export default async function ProjectAreaTable() {
  const data = await getProjectAreaList();

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
                href={`/admin/project-area/update/${item.id}`}
                className={buttonVariants({
                  variant: "secondary",
                  size: "icon",
                })}
              >
                <FaEdit className="h-4 w-auto" />
              </Link>
              <DeleteFormButton id={item.id} action={"projectArea"} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
