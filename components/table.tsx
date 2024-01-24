import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import Link from "next/link";
import { buttonVariants } from "@components/ui/button";
import DeleteFormButton from "@components/delete-form-button";
import { FaEdit } from "react-icons/fa";
import { Area, Carreer, Project, Type } from "@prisma/client";
import { TableSelection } from "@/utils/types";

interface TableProps {
  data: (Project | Area | Carreer | Type)[];
  type: TableSelection;
}

type DataItem = Project | Area | Carreer | Type;

export default function AdminTable({ data, type }: TableProps) {
  // extracts columns from data prop
  const columns = Object.keys(data[0]) as string[];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index}>{column}</TableHead>
          ))}

          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* iterates per object in the data array  */}
        {data.map((item, index) => (
          <TableRow key={index}>
            {/* iterates each column in the current object mapped  */}
            {Object.keys(item).map((outerKey) => (
              <TableCell
                key={outerKey}
                className="max-w-xs overflow-hidden break-words"
              >
                {/* checks if item exists in the current object */}
                {item[outerKey as keyof DataItem] &&
                // If the value is an object, iterate over its key-value pairs
                // this is useful when the prisma call returns a join to another table
                typeof item[outerKey as keyof DataItem] === "object"
                  ? Object.entries(item[outerKey as keyof DataItem]).map(
                      ([innerKey, value]) => (
                        <p key={innerKey}>{`${innerKey}: ${value}`}</p>
                      )
                    )
                  : // If the value is not an object, display it as a string
                    item[outerKey as keyof DataItem]?.toString()}
              </TableCell>
            ))}

            <TableCell className="flex gap-4">
              <Link
                href={`/admin/${type}/${item.id}`}
                className={buttonVariants({
                  variant: "secondary",
                  size: "icon",
                })}
              >
                <FaEdit className="h-4 w-auto" />
              </Link>
              <DeleteFormButton id={item.id} action={type} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
