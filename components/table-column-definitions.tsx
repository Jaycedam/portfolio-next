"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import DeleteFormButton from "./delete-form-button";
import { Carreer, Type } from "@prisma/client";
import { DataTableColumnHeader } from "@components/ui/datatable-column-header";

// todo: refactor actions from each column def
// todo: refactor sorting function

export const typeColumns: ColumnDef<Type>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-1">
          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
            href={`/admin/carreer-type/${row.getValue("id")}`}
          >
            <Edit className="h-4" />
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company" />
    ),
  },
  {
    accessorKey: "about",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="About" />
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
  },
  {
    accessorKey: "typeId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type ID" />
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-1">
          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
            href={`/admin/carreer/${row.getValue("id")}`}
          >
            <Edit className="h-4" />
          </Link>
          <DeleteFormButton action="carreer" id={row.getValue("id")} />
        </div>
      );
    },
  },
];
