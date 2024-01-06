import { Area, Carreer, Project, Type } from "@prisma/client";

export interface ExtendedProject extends Project {
  area: Area;
}

export interface ExtendedCarreer extends Carreer {
  type: Type;
}
