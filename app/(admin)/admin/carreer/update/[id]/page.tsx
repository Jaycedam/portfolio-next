import CarreerForm from "@/components/form/carreer-form";
import { getCarreer } from "@/utils/get-data";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const data = await getCarreer(Number(params.id));
  return <CarreerForm carreer={data} />;
}
