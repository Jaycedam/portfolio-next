import { Area, Carreer, Software, Type } from "@prisma/client";

export interface ExtendedSoftware extends Software {
  area: Area;
}

export interface ExtendedCarreer extends Carreer {
  type: Type;
}
