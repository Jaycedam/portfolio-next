import { getCarreerTypes, getCarreers } from "@/utils/get-data";
import { TableSelection } from "@/utils/types";
import React from "react";
import DataTable from "./react-table";
import {
  carreerColumns,
  typeColumns,
} from "@/components/table-column-definitions";

export default async function TableLoader({ type }: { type: TableSelection }) {
  switch (type) {
    case "carreer":
      const carreer = await getCarreers();
      return <DataTable data={carreer} columns={carreerColumns} />;
    case "carreer-type":
      const type = await getCarreerTypes();
      return <DataTable data={type} columns={typeColumns} />;
  }
}
