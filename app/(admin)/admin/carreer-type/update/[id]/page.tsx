import CarreerTypeForm from "@/components/form/carreer-type-form";
import { getCarreerType } from "@/utils/get-data";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const data = await getCarreerType(Number(params.id));
  return <CarreerTypeForm />;
}
