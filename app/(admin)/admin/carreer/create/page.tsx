import CarreerForm from "@/components/form/carreer-form";
import { getCarreerTypeList } from "@/utils/get-data";
import React from "react";

export default async function page() {
  const carreerTypeList = await getCarreerTypeList();
  return <CarreerForm typeCbo={carreerTypeList} />;
}
