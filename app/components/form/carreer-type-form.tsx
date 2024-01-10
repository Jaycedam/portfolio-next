"use client";

import { Type } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreateCarreerType, UpdateCarreerType } from "@/actions/carreer-type";

export default function CarreerTypeForm(props: { carreerType?: Type }) {
  // check if object is being passed down to update, else create new one on db
  const formAction = props.carreerType ? UpdateCarreerType : CreateCarreerType;
  const formTitle = props.carreerType
    ? "Update Carreer Type"
    : "Create Carreer Type";

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle>{formTitle}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ut.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="grid gap-6">
          <Input
            type="hidden"
            readOnly
            name="id"
            defaultValue={props.carreerType?.id}
          />

          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              required
              type="text"
              name="name"
              defaultValue={props.carreerType?.name}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
