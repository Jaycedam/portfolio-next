"use client";

import { CreateProject, UpdateProject } from "@/actions/project";
import { Area, Project } from "@prisma/client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { TProject, projectSchema } from "@/lib/zod-schema";
import { toast } from "sonner";

export default function ProjectForm(props: {
  project?: Project;
  areaCbo: Area[];
}) {
  // check if project is being passed down to update, else create new one on db
  const formAction = props.project ? UpdateProject : CreateProject;
  const formTitle = props.project ? "Update Project" : "Create Project";

  // if prop is being passed down, use the existing bool for checkmark, else use false
  const [checked, setChecked] = useState(
    props.project ? props.project.homepage.valueOf() : false
  );

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (formData: FormData) => {
    let errorMessage: string = "";

    const data: TProject = {
      id: Number(formData.get("id")),
      name: formData.get("name") as string,
      url: formData.get("url") as string,
      imageUrl: formData.get("imageUrl") as string,
      areaId: Number(formData.get("areaId")),
      homepage: Boolean(formData.get("homepage")),
    };

    const parsedData = projectSchema.safeParse(data);

    if (!parsedData.success) {
      parsedData.error.issues.map(
        (issue) =>
          (errorMessage =
            errorMessage + issue.path[0] + ": " + issue.message + ". ")
      );

      toast.error(errorMessage);
      return;
    }

    const result = await formAction(parsedData.data);

    if (result?.error) {
      toast.error(String(result.error));
    }
  };

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle>{formTitle}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ut.
        </CardDescription>
      </CardHeader>
      <form action={handleSubmit}>
        <CardContent className="grid gap-6">
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
              defaultValue={props.project?.url ?? ""}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="areaId">Area ID</Label>

            <Select
              name="areaId"
              required
              defaultValue={props.project?.areaId.toString()}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {props.areaCbo.map((item, index) => (
                  <SelectItem key={index} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
