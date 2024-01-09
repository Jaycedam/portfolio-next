"use client";

import { Area } from "@prisma/client";
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
import { CreateProjectArea, UpdateProjectArea } from "@/actions/project-area";

export default function ProjectAreaForm(props: { projectArea?: Area }) {
  // check if project is being passed down to update, else create new one on db
  const formAction = props.projectArea ? UpdateProjectArea : CreateProjectArea;
  const formTitle = props.projectArea
    ? "Update Project Area"
    : "Create Project Area";

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle>{formTitle}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ut.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="grid gap-4">
          <Input
            type="hidden"
            readOnly
            name="id"
            defaultValue={props.projectArea?.id}
          />

          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              required
              type="text"
              name="name"
              defaultValue={props.projectArea?.name}
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
