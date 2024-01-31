import { Carreer, Type } from "@prisma/client";

export interface ExtendedCarreer extends Carreer {
  type: Type;
}
