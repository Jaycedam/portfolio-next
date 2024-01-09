import CarreerForm from "@/components/form/carreer-form";
import { getCarreer, getCarreerTypeList } from "@/utils/get-data";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const data = await getCarreer(Number(params.id));
  const carreerTypeList = await getCarreerTypeList();
  return <CarreerForm carreer={data} typeCbo={carreerTypeList} />;
}
