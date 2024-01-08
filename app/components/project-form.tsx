"use client";

import { CreateProject, UpdateProject } from "@/utils/actions";
import { Project } from "@prisma/client";
import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";

export default function ProjectForm(props: { project?: Project }) {
  // check if project is being passed down to update, else create new one on db
  const formAction = props.project ? UpdateProject : CreateProject;
  const formTitle = props.project ? "Update Project" : "Create Project";

  // if prop is being passed down, use the existing bool for checkmark, else use false
  const [checked, setChecked] = useState(
    props.project ? props.project.homepage.valueOf() : false
  );

  const handleChecked = (e) => {
    setChecked(!checked);
  };

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
            defaultValue={props.project?.id}
          />

          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              required
              type="text"
              name="name"
              defaultValue={props.project?.name}
            />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              required
              type="text"
              name="imageUrl"
              defaultValue={props.project?.imageUrl}
            />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="url">MDX URL</Label>
            <Input
              required
              type="text"
              name="url"
              defaultValue={props.project?.url}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="areaId">Area ID</Label>
            <Input
              required
              type="number"
              name="areaId"
              defaultValue={props.project?.areaId}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              onCheckedChange={handleChecked}
              name="homepage"
              checked={checked}
            />
            <Label htmlFor="homepage">See on homepage</Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  );
}