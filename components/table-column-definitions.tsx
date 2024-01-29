"use client";

import { ExtendedProject } from "@/utils/interfaces";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import DeleteFormButton from "./delete-form-button";
import { Area, Carreer, Type } from "@prisma/client";

// todo: refactor actions from each column def
// todo: refactor sorting function

export const projectColumns: ColumnDef<ExtendedProject>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Image URL",
  },
  {
    accessorKey: "url",
    header: "MDX URL",
  },
  {
    accessorKey: "homepage",
    header: "Homepage",
  },
  {
    accessorKey: "areaId",
    header: "Area ID",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon",
            })}
            href={`/admin/project/${row.getValue("id")}`}
          >
            <FaRegEdit />
          </Link>
          <DeleteFormButton action="project" id={row.getValue("id")} />
        </div>
      );
    },
  },
];

export const areaColumns: ColumnDef<Area>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon",
            })}
            href={`/admin/project-area/${row.getValue("id")}`}
          >
            <FaRegEdit />
          </Link>
          <DeleteFormButton action="project-area" id={row.getValue("id")} />
        </div>
      );
    },
  },
];

export const typeColumns: ColumnDef<Type>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon",
            })}
            href={`/admin/carreer-type/${row.getValue("id")}`}
          >
            <FaRegEdit />
          </Link>
          <DeleteFormButton action="carreer-type" id={row.getValue("id")} />
        </div>
      );
    },
  },
];

export const carreerColumns: ColumnDef<Carreer>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "about",
    header: "About",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "typeId",
    header: "Type ID",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon",
            })}
            href={`/admin/carreer/${row.getValue("id")}`}
          >
            <FaRegEdit />
          </Link>
          <DeleteFormButton action="carreer" id={row.getValue("id")} />
        </div>
      );
    },
  },
];
