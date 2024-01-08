import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { ExtendedProject } from "@/utils/interfaces";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import DeleteFormButton from "./delete-form-button";

export default async function ProjectsTable() {
  const data = await getData();

  return (
    <Table>
      <TableCaption>A list of software projects.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Area</TableHead>
          <TableHead>Homepage</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell className="flex max-w-[10rem] gap-4 overflow-hidden overflow-ellipsis whitespace-nowrap">
              <a href={item.url} target="_blank">
                MDX
              </a>
              <a href={item.imageUrl} target="_blank">
                Image
              </a>
            </TableCell>
            <TableCell>{item.area.name}</TableCell>
            <TableCell>{item.homepage.toString()}</TableCell>
            <TableCell className="flex gap-4">
              <Link
                href={`/admin/projects/update/${item.id}`}
                className={buttonVariants({ variant: "secondary" })}
              >
                Edit
              </Link>
              <DeleteFormButton id={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

async function getData(): Promise<ExtendedProject[]> {
  try {
    const result = await prisma.project.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        area: true,
      },
    });

    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
}
